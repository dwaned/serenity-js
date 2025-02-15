import { SerenityConfig } from './config';
import { Actor } from './screenplay/actor';
import { Serenity } from './Serenity';
import { Cast, Clock } from './stage';

const clock = new Clock();

/**
 * Serenity object is the root object of the Serenity/JS framework.
 *
 * @group Serenity
 */
export const serenity = new Serenity(clock);

/**
 * Configures Serenity/JS. Every call to this function
 * replaces the previous configuration provided,
 * so this function should be called exactly once
 * in your test suite.
 *
 * This function is an alias for {@apilink Serenity.configure}.
 *
 * @param config
 *
 * @group Serenity
 */
export function configure(config: SerenityConfig): void {
    serenity.configure(config);
}

/**
 * Re-configures Serenity/JS with a new {@apilink Cast} of {@apilink Actor|actors}
 * you want to use in any subsequent calls to {@apilink actorCalled}.
 *
 * This function is an alias for {@apilink Serenity.engage},
 * which provides an alternative to calling {@apilink Actor.whoCan} directly in your tests
 * and is typically invoked in a "before all" or "before each" hook of your test runner of choice.
 *
 * If your implementation of the {@apilink Cast} interface is stateless,
 * you can invoke this function just once before your entire test suite is executed, see
 * - [`beforeAll`](https://jasmine.github.io/api/3.6/global.html#beforeAll) in Jasmine,
 * - [`before`](https://mochajs.org/#hooks) in Mocha,
 * - [`BeforeAll`](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md#beforeall--afterall) in Cucumber.js
 *
 * However, if your {@apilink Cast} holds state that you want to reset before each scenario,
 * it's better to invoke `engage` before each test using:
 * - [`beforeEach`](https://jasmine.github.io/api/3.6/global.html#beforeEach) in Jasmine
 * - [`beforeEach`](https://mochajs.org/#hooks) in Mocha,
 * - [`Before`](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md#hooks) in Cucumber.js
 *
 * ## Engaging a cast of actors
 *
 * ```ts
 * import { Actor, Cast } from '@serenity-js/core';
 *
 * class Actors implements Cast {
 *   prepare(actor: Actor) {
 *     return actor.whoCan(
 *       // ... abilities you'd like the Actor to have
 *     );
 *   }
 * }
 *
 * engage(new Actors());
 * ```
 *
 * ### Using with Mocha test runner
 *
 * ```ts
 * import { beforeEach } from 'mocha'
 *
 * beforeEach(() => engage(new Actors()))
 * ```
 *
 * ### Using with Jasmine test runner
 *
 * ```ts
 * import 'jasmine'
 *
 * beforeEach(() => engage(new Actors()))
 * ```
 *
 * ### Using with Cucumber.js test runner
 *
 * ```ts
 * import { Before } from '@cucumber/cucumber'
 *
 * Before(() => engage(new Actors()))
 * ```
 *
 * ## Learn more
 * - {@apilink Actor}
 * - {@apilink Cast}
 * - {@apilink Serenity.engage}
 *
 * @param actors
 *
 * @group Stage
 */
export function engage(actors: Cast): void {
    serenity.engage(actors);
}

/**
 * Instantiates or retrieves an {@apilink Actor}
 * called `name` if one has already been instantiated.
 *
 * This method is an alias for {@apilink Serenity.theActorCalled}.
 *
 * ## Usage with Mocha
 *
 * ```typescript
 *   import { describe, it } from 'mocha';
 *   import { actorCalled } from '@serenity-js/core';
 *
 *   describe('Feature', () => {
 *
 *      it('should have some behaviour', () =>
 *          actorCalled('James').attemptsTo(
 *              // ... activities
 *          ))
 *   })
 * ```
 *
 * ## Usage with Jasmine
 *
 * ```typescript
 *   import 'jasmine';
 *   import { actorCalled } from '@serenity-js/core';
 *
 *   describe('Feature', () => {
 *
 *      it('should have some behaviour', () =>
 *          actorCalled('James').attemptsTo(
 *              // ... activities
 *          ))
 *   })
 * ```
 *
 * ## Usage with Cucumber
 *
 * ```typescript
 * import { actorCalled } from '@serenity-js/core';
 * import { Given } from '@cucumber/cucumber';
 *
 * Given(/(.*?) is a registered user/, (name: string) =>
 *   actorCalled(name).attemptsTo(
 *     // ... activities
 *   ))
 * ```
 *
 * ## Learn more
 *
 * - {@apilink engage}
 * - {@apilink Actor}
 * - {@apilink Cast}
 * - {@apilink Serenity.theActorCalled}
 *
 * @param name
 *  The name of the actor to instantiate or retrieve
 *
 * @group Actors
 */
export function actorCalled(name: string): Actor {
    return serenity.theActorCalled(name);
}

/**
 * Retrieves an actor who was last instantiated or retrieved
 * using {@apilink actorCalled}.
 *
 * This function is particularly useful when automating Cucumber scenarios.
 *
 * This function is an alias for {@apilink Serenity.theActorInTheSpotlight}.
 *
 * ## Usage with Cucumber
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core';
 * import { Given, When } from '@cucumber/cucumber';
 *
 * Given(/(.*?) is a registered user/, (name: string) =>
 *   actorCalled(name).attemptsTo(
 *     // ... activities
 *   ))
 *
 * When(/(?:he|she|they) browse their recent orders/, () =>
 *   actorInTheSpotlight().attemptsTo(
 *     // ... activities
 *   ))
 * ```
 *
 * ## Learn more
 *
 * - {@apilink engage}
 * - {@apilink actorCalled}
 * - {@apilink Actor}
 * - {@apilink Cast}
 *
 * @group Actors
 */
export function actorInTheSpotlight(): Actor {
    return serenity.theActorInTheSpotlight();
}
