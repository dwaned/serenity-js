import { expect, ifExitCodeIsOtherThan, logOutput, PickEvent } from '@integration/testing-tools';
import { AssertionError, LogicError, TestCompromisedError } from '@serenity-js/core';
import { SceneFinished, SceneStarts, SceneTagged, TestRunnerDetected } from '@serenity-js/core/lib/events';
import { ExecutionCompromised, ExecutionFailedWithAssertionError, ExecutionFailedWithError, FeatureTag, Name, ProblemIndication } from '@serenity-js/core/lib/model';
import { describe, it } from 'mocha';

import { playwrightTest } from '../src/playwright-test';

describe('@serenity-js/playwright-test', function () {

    describe('recognises a failing scenario that', () => {

        it('throws an error', () => playwrightTest('--project=default', 'failing/error-thrown.spec.ts')
            .then(ifExitCodeIsOtherThan(1, logOutput))
            .then(result => {

                expect(result.exitCode).to.equal(1);

                PickEvent.from(result.events)
                    .next(SceneStarts,         event => expect(event.details.name).to.equal(new Name('A scenario fails when an error is thrown')))
                    .next(SceneTagged,         event => expect(event.tag).to.equal(new FeatureTag('Playwright Test reporting')))
                    .next(TestRunnerDetected,  event => expect(event.name).to.equal(new Name('Playwright')))
                    .next(SceneFinished,       event => {
                        const outcome: ProblemIndication = event.outcome as ProblemIndication;
                        expect(outcome).to.be.instanceOf(ExecutionFailedWithError);
                        expect(outcome.error.name).to.equal('Error');
                        expect(outcome.error.message).to.equal('Something happened');
                    })
                ;
            }));

        it('fails because of a failing Playwright assertion', () => playwrightTest('--project=default', 'failing/failing-playwright-assertion.spec.ts')
            .then(ifExitCodeIsOtherThan(1, logOutput))
            .then(result => {

                expect(result.exitCode).to.equal(1);

                PickEvent.from(result.events)
                    .next(SceneStarts,         event => expect(event.details.name).to.equal(new Name('A scenario fails when the assertion fails')))
                    .next(SceneTagged,         event => expect(event.tag).to.equal(new FeatureTag('Playwright Test reporting')))
                    .next(TestRunnerDetected,  event => expect(event.name).to.equal(new Name('Playwright')))
                    .next(SceneFinished,       event => {
                        const outcome = event.outcome as ProblemIndication;
                        expect(outcome).to.be.instanceOf(ExecutionFailedWithError);

                        const error = outcome.error as Error;

                        expect(error.name).to.equal('Error');

                        // TestError provided by Playwright is already serialised so we can't know the original expected and actual values
                        expect(error.message.split('\n')).to.deep.equal([
                            'expect(received).toEqual(expected) // deep equality',
                            '',
                            'Expected: false',
                            'Received: true',
                        ]);
                    })
                ;
            }));

        it('fails with a Serenity/JS AssertionError', () => playwrightTest('--project=default', 'failing/failing-serenity-js-assertion.spec.ts')
            .then(ifExitCodeIsOtherThan(1, logOutput))
            .then(result => {

                expect(result.exitCode).to.equal(1);

                PickEvent.from(result.events)
                    .next(SceneStarts,         event => expect(event.details.name).to.equal(new Name('A scenario fails when the assertion fails')))
                    .next(SceneTagged,         event => expect(event.tag).to.equal(new FeatureTag('Playwright Test reporting')))
                    .next(TestRunnerDetected,  event => expect(event.name).to.equal(new Name('Playwright')))
                    .next(SceneFinished,       event => {
                        const outcome = event.outcome as ProblemIndication;
                        expect(outcome).to.be.instanceOf(ExecutionFailedWithError);

                        const error = outcome.error as Error;

                        // Playwright doesn't serialise expected and actual fields on AssertionError
                        expect(error.name).to.equal('Error');
                        expect(error.message).to.equal('Expected true to equal false');
                    })
                ;
            }));

        it('fails with a Serenity/JS Screenplay AssertionError', () => playwrightTest('--project=default', 'failing/failing-serenity-js-screenplay-assertion.spec.ts')
            .then(ifExitCodeIsOtherThan(1, logOutput))
            .then(result => {

                expect(result.exitCode).to.equal(1);

                PickEvent.from(result.events)
                    .next(SceneStarts,         event => expect(event.details.name).to.equal(new Name('A scenario fails when the assertion fails')))
                    .next(SceneTagged,         event => expect(event.tag).to.equal(new FeatureTag('Playwright Test reporting')))
                    .next(TestRunnerDetected,  event => expect(event.name).to.equal(new Name('Playwright')))
                    .next(SceneFinished,       event => {
                        const outcome = event.outcome as ProblemIndication;
                        expect(outcome).to.be.instanceOf(ExecutionFailedWithAssertionError);

                        const error = outcome.error as AssertionError;

                        expect(error.name).to.equal('AssertionError');
                        expect(error.message).to.equal(`Expected 'Hello' to equal 'Hola'`);
                        expect(error.expected).to.equal('Hola');
                        expect(error.actual).to.equal('Hello');
                    })
                ;
            }));

        it('is compromised', () => playwrightTest('--project=default', 'failing/test-compromised.spec.ts')
            .then(ifExitCodeIsOtherThan(1, logOutput))
            .then(result => {

                expect(result.exitCode).to.equal(1);

                PickEvent.from(result.events)
                    .next(SceneStarts,         event => expect(event.details.name).to.equal(new Name('A scenario is compromised')))
                    .next(SceneTagged,         event => expect(event.tag).to.equal(new FeatureTag('Playwright Test reporting')))
                    .next(TestRunnerDetected,  event => expect(event.name).to.equal(new Name('Playwright')))
                    .next(SceneFinished,       event => {
                        const outcome = event.outcome as ProblemIndication;
                        expect(outcome).to.be.instanceOf(ExecutionCompromised);

                        const error = outcome.error as TestCompromisedError;

                        expect(error).to.be.instanceof(TestCompromisedError);
                        expect(error.message).to.equal(`Translation DB is down, please cheer it up`);
                    })
                ;
            }));

        it('is marked as failing but passes', () => playwrightTest('--project=default', 'failing/marked-as-failing-but-passes.spec.ts')
            .then(ifExitCodeIsOtherThan(1, logOutput))
            .then(result => {

                expect(result.exitCode).to.equal(1);

                PickEvent.from(result.events)
                    .next(SceneStarts,         event => expect(event.details.name).to.equal(new Name('A scenario is marked as failing, but passes')))
                    .next(SceneTagged,         event => expect(event.tag).to.equal(new FeatureTag('Playwright Test reporting')))
                    .next(TestRunnerDetected,  event => expect(event.name).to.equal(new Name('Playwright')))
                    .next(SceneFinished,       event => {
                        const outcome = event.outcome as ProblemIndication;
                        expect(outcome).to.be.instanceOf(ExecutionFailedWithError);

                        const error = outcome.error as LogicError;

                        expect(error).to.be.instanceof(LogicError);
                        expect(error.message).to.equal(`Scenario expected to fail, but passed`);
                    })
                ;
            }));
    });
});
