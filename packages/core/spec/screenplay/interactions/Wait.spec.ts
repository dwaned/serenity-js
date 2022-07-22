import { describe, it } from 'mocha';

import { Ability, Answerable, AssertionError, Cast, Duration, Expectation, Interaction, Question, Serenity, Timestamp, UsesAbilities, Wait } from '../../../src';
import { expect } from '../../expect';
import { Ensure } from '../Ensure';

/** @test {Wait} */
describe('Wait', () => {

    let serenity: Serenity;

    beforeEach(async () => {
        serenity = new Serenity();
        serenity.engage(Cast.whereEveryoneCan(new UseAStopwatch()))

        await serenity.theActorCalled('Wendy')
            .attemptsTo(
                Ensure.equal(Stopwatch.elapsedTime(), Duration.ofMilliseconds(0)),
            )
    });

    afterEach(() =>
        serenity.theActorCalled('Wendy')
            .attemptsTo(Stopwatch.stop())
    );

    describe('for', () => {

        /** @test {Wait.for} */
        it('pauses the actor flow for the length of an explicitly-set duration', () =>
            serenity.theActorCalled('Wendy')
                .attemptsTo(
                    Stopwatch.start(),
                    Wait.for(Duration.ofMilliseconds(100)),
                    Stopwatch.stop(),
                    Ensure.closeTo(Stopwatch.elapsedTime().inMilliseconds(), 100, 10),
                ));

        /** @test {Wait#toString} */
        it('provides a sensible description of the interaction being performed', () => {
            expect(Wait.for(Duration.ofMilliseconds(300)).toString())
                .to.equal(`#actor waits for 300ms`);
        });
    });

    describe('until', () => {

        /** @test {Wait.until} */
        it('pauses the actor flow until the expectation is met, polling for result every 500ms by default', () =>
            serenity.theActorCalled('Wendy')
                .attemptsTo(
                    Stopwatch.start(),
                    Wait.until(Stopwatch.elapsedTime().inMilliseconds().describedAs('elapsed time [ms]'), isGreaterThan(250)),
                    Stopwatch.stop(),
                    Ensure.closeTo(Stopwatch.elapsedTime().inMilliseconds(), 500, 30),
                    Ensure.lessThan(Stopwatch.elapsedTime().inMilliseconds(), 1000),
                ));

        /** @test {Wait.until} */
        it('pauses the actor flow until the expectation is met, with a configurable polling interval', () =>
            serenity.theActorCalled('Wendy')
                .attemptsTo(
                    Stopwatch.start(),
                    Wait.until(Stopwatch.elapsedTime().inMilliseconds().describedAs('elapsed time [ms]'), isGreaterThan(250)).pollingEvery(Duration.ofMilliseconds(50)),
                    Stopwatch.stop(),
                    Ensure.closeTo(Stopwatch.elapsedTime().inMilliseconds(), 275, 30),
                    Ensure.lessThan(Stopwatch.elapsedTime().inMilliseconds(), 500),
                ));

        /** @test {Wait.upTo} */
        /** @test {Wait.until} */
        it('fails the actor flow when the timeout expires', () =>
            expect(
                serenity.theActorCalled('Wendy')
                    .attemptsTo(
                        Stopwatch.start(),
                        Wait.upTo(Duration.ofMilliseconds(250))
                            .until(Stopwatch.elapsedTime().inMilliseconds().describedAs('elapsed time [ms]'), isGreaterThan(250))
                            .pollingEvery(Duration.ofMilliseconds(50)),
                    )
            ).to.be.rejected.then((error: AssertionError) => {
                expect(error).to.be.instanceOf(AssertionError);
                expect(error.message).to.be.equal(`Waited 250ms, polling every 50ms, for elapsed time [ms] to have value greater than 250`);
                expect(error.expected).to.be.equal(250);
                expect(error.actual).to.be.greaterThanOrEqual(50);
            }));

        it('fails the actor flow when asking the question results in an error', () =>
            expect(
                serenity.theActorCalled('Wendy')
                    .attemptsTo(
                        Wait.upTo(Duration.ofMilliseconds(250))
                            .until(Question.about<number>('error', actor => { throw new Error('error in question') }), isGreaterThan(250))
                            .pollingEvery(Duration.ofMilliseconds(50)),
                    )
            ).to.be.rejected.then((error: Error) => {
                expect(error).to.be.instanceOf(Error);
                expect(error.message).to.be.equal(`error in question`);
            }));

        it('fails the actor flow when invoking the expectation results in an error', () =>
            expect(
                serenity.theActorCalled('Wendy')
                    .attemptsTo(
                        Wait.upTo(Duration.ofMilliseconds(250))
                            .until(undefined, brokenExpectationThatThrows('error in expectation'))
                            .pollingEvery(Duration.ofMilliseconds(50)),
                    )
            ).to.be.rejected.then((error: Error) => {
                expect(error).to.be.instanceOf(Error);
                expect(error.message).to.be.equal(`error in expectation`);
            }));

        /** @test {Wait#toString} */
        it('provides a sensible description of the interaction being performed', () => {
            expect(
                Wait.upTo(Duration.ofMilliseconds(250))
                    .until(Stopwatch.elapsedTime().inMilliseconds().describedAs('elapsed time [ms]'), isGreaterThan(250))
                    .pollingEvery(Duration.ofMilliseconds(50)).toString()
            ).to.equal(`#actor waits up to 250ms, polling every 50ms, until elapsed time [ms] does have value greater than 250`);
        });

        it('complains when the timeout is less than the minimum', () => {
            expect(() =>
                Wait.upTo(Duration.ofMilliseconds(1))
                    .until(Stopwatch.elapsedTime().inMilliseconds(), isGreaterThan(250))
            ).to.throw(Error, 'Timeout should either be equal to 250 or be greater than 250');
        });

        it('complains when the polling interval is less than the minimum', () => {
            expect(() =>
                Wait.until(Stopwatch.elapsedTime().inMilliseconds(), isGreaterThan(250))
                    .pollingEvery(Duration.ofMilliseconds(1))
            ).to.throw(Error, 'Polling interval should either be equal to 50 or be greater than 50');
        });

        it('complains when the polling interval is greater than the timeout', () => {
            expect(() =>
                Wait.until(Stopwatch.elapsedTime().inMilliseconds(), isGreaterThan(250))
                    .pollingEvery(Duration.ofMilliseconds(1))
            ).to.throw(Error, 'Polling interval should either be equal to 50 or be greater than 50');
        });

        it('defaults the polling interval to the length of the timeout when timeout is less than the default polling interval', () => {
            const description = Wait.upTo(Duration.ofMilliseconds(250)).until(2, isGreaterThan(1)).toString()

            expect(description).to.equal('#actor waits up to 250ms, polling every 250ms, until 2 does have value greater than 1');
        });
    });
});

function brokenExpectationThatThrows(message: string): Expectation<any> {
    return Expectation.thatActualShould<any, any>('throw an Error', undefined)  // eslint-disable-line unicorn/no-useless-undefined
        .soThat((actualValue, expectedValue) => {
            throw new Error(message);
        });
}

function isGreaterThan(expected: Answerable<number>): Expectation<number> {
    return Expectation.thatActualShould<number, number>('have value greater than', expected)
        .soThat((actualValue, expectedValue) => actualValue > expectedValue);
}

class UseAStopwatch implements Ability {

    static as(actor: UsesAbilities): UseAStopwatch {
        return actor.abilityTo(UseAStopwatch);
    }

    constructor(public readonly stopwatch = new Stopwatch()) {
    }
}

class Stopwatch {
    private startTime: Timestamp;
    private elapsedTime: Duration = Duration.ofMilliseconds(0);
    private interval: NodeJS.Timeout;

    static start = () =>
        Interaction.where(`#actor starts their stopwatch`, actor => {
            return UseAStopwatch.as(actor).stopwatch.start();
        });

    static elapsedTime = () =>
        Question.about('elapsed time', actor => {
            return UseAStopwatch.as(actor).stopwatch.elapsedTime;
        })

    static stop = () =>
        Interaction.where(`#actor stops their stopwatch`, actor => {
            return UseAStopwatch.as(actor).stopwatch.stop();
        });

    start() {
        this.startTime = new Timestamp();
        this.interval = setInterval(() => {
            this.elapsedTime = new Timestamp().diff(this.startTime);
        }, 50)
    }

    stop() {
        clearInterval(this.interval);
    }
}