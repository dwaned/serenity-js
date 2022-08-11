import { Answerable, AnswersQuestions, CollectsArtifacts, Interaction, UsesAbilities } from '@serenity-js/core';
import { Artifact, HTTPRequestResponse, Name, RequestAndResponse } from '@serenity-js/core/lib/model';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { CallAnApi } from '../abilities';

/**
 * Sends a {@apilink HTTPRequest} to a specified url.
 *
 * The response to the request is made available via {@apilink LastResponse}.
 *
 * ## Send a GET request
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * await actorCalled('Apisit')
 *   .whoCan(CallAnApi.at('https://api.example.org/'))
 *   .attemptsTo(
 *     Send.a(GetRequest.to('/books/0-688-00230-7')),
 *     Ensure.that(LastResponse.status(), equals(200)),
 *   )
 * ```
 *
 * @group Interactions
 */
export class Send extends Interaction {

    /**
     * Instantiates a new {@apilink Interaction|interaction} to {@apilink Send}.
     *
     * #### Learn more
     * - [AxiosRequestConfig](https://github.com/axios/axios/blob/v0.27.2/index.d.ts#L75-L113)
     *
     * @param request
     */
    static a(request: Answerable<AxiosRequestConfig>): Interaction {
        return new Send(request);
    }

    /**
     * @param request
     */
    protected constructor(private readonly request: Answerable<AxiosRequestConfig>) {
        super();
    }

    /**
     * @inheritDoc
     */
    performAs(actor: UsesAbilities & CollectsArtifacts & AnswersQuestions): Promise<void> {
        const callAnApi = CallAnApi.as(actor);

        return actor.answer(this.request)
            .then(config =>
                callAnApi.request(config).then((response: AxiosResponse) => {
                    const resolvedUrl = callAnApi.resolveUrl(config);

                    actor.collect(
                        this.responseToArtifact(resolvedUrl, response),
                        this.requestToArtifactName(response.config.method, resolvedUrl),
                    );
                })
            );
    }

    /**
     * @inheritDoc
     */
    toString(): string {
        return `#actor sends ${ this.request.toString() }`;
    }

    private responseToArtifact(targetUrl: string, response: AxiosResponse): Artifact {
        const
            request: AxiosRequestConfig = response.config,
            requestAndResponse: RequestAndResponse = {
                request: {
                    method:     request.method,
                    url:        targetUrl,
                    headers:    request.headers,
                    data:       request.data,
                },
                response: {
                    status:     response.status,
                    headers:    response.headers,
                    data:       response.data,
                },
            };

        return HTTPRequestResponse.fromJSON(requestAndResponse);
    }

    private requestToArtifactName(method: string, url: string) {
        return new Name(`${ method.toUpperCase() } ${ url }`);
    }
}
