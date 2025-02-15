import { expect } from '@integration/testing-tools';
import { actorCalled, AssertionError, Expectation } from '@serenity-js/core';
import { describe, it } from 'mocha';

import { and, contain, containAtLeastOneItemThat, endsWith, Ensure, equals, includes, isFalse, isGreaterThan, isLessThan, isTrue, not, or, startsWith } from '../../src';

describe('not', () => {

    it('allows for the actor flow to continue when the "actual" meets the expectation', () => {
        return expect(actorCalled('Astrid').attemptsTo(
            Ensure.that('Hello World!', not(startsWith('¡Hola'))),
        )).to.be.fulfilled;
    });

    it('breaks the actor flow when "actual" does not meet the expectation', () => {
        return expect(actorCalled('Astrid').attemptsTo(
            Ensure.that('Hello World!', not(startsWith('Hello'))),
        )).to.be.rejectedWith(AssertionError, `Expected 'Hello World!' to not start with 'Hello'`)
            .then((error: AssertionError) => {
                expect(error.expected).to.equal('Hello');
                expect(error.actual).to.equal('Hello World!');
            });
    });

    it('contributes to a human-readable description', () => {
        expect(Ensure.that('Hello', not(startsWith('o'))).toString())
            .to.equal(`#actor ensures that 'Hello' does not start with 'o'`);
    });

    it('flips the outcome of an assertion, but doesn\'t hide any errors that might have happened while making it', () => {
        const blowsUp = () =>
            Expectation.thatActualShould('blow up', 'expected')
                .soThat((actual, expected) => {
                    throw new Error('boom');
                });

        return expect(actorCalled('Astrid').attemptsTo(
            Ensure.that('Hello World!', not(blowsUp())),
        )).to.be.rejectedWith(Error, `boom`);
    });

    describe('double negative', () => {
        it('contributes to a human-readable description', () => {
            expect(Ensure.that('Hello', not(not(startsWith('o')))).toString())
                .to.equal(`#actor ensures that 'Hello' does start with 'o'`);
        });
    });

    describe('when combined with other assertions, such as', () => {

        describe('and,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that(3, not(and(isGreaterThan(2), isLessThan(4)))),
                )).to.be.rejectedWith(AssertionError, `Expected 3 to not have value greater than 2 and have value that's less than 4`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal(4);
                        expect(error.actual).to.equal(3);
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that(3, not(and(isGreaterThan(2), isLessThan(4)))).toString())
                    .to.equal(`#actor ensures that 3 does not have value greater than 2 and have value that's less than 4`);
            });
        });

        describe('contains,', () => {

            it('produces a sensible error message', () =>
                expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that([ 1, 2, 3 ], not(contain(2))),
                )).
                to.be.rejectedWith(AssertionError, `Expected [ 1, 2, 3 ] to not contain 2`).
                then((error: AssertionError) => {
                    expect(error.expected).to.equal(2);
                    expect(error.actual).to.deep.equal([ 1, 2, 3 ]);
                }),
            );

            it('contributes to a human-readable description', () => {
                expect(Ensure.that([ 'H', 'e', 'l', 'l', 'o' ], not(contain('o'))).toString())
                    .to.equal(`#actor ensures that [ 'H', 'e', 'l', 'l', 'o' ] does not contain 'o'`);
            });
        });

        describe('containAtLeastOneItemThat,', () => {

            it('produces a sensible error message', () =>
                expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that([ 1, 2, 3 ], not(containAtLeastOneItemThat(equals(2)))),
                )).
                to.be.rejectedWith(AssertionError, `Expected [ 1, 2, 3 ] to not contain at least one item that does equal 2`).
                then((error: AssertionError) => {
                    expect(error.expected).to.equal(2);
                    expect(error.actual).to.deep.equal([ 1, 2, 3 ]);
                }),
            );

            it('contributes to a human-readable description', () => {
                expect(Ensure.that([ 'H', 'e', 'l', 'l', 'o' ], not(containAtLeastOneItemThat(equals('o')))).toString())
                    .to.equal(`#actor ensures that [ 'H', 'e', 'l', 'l', 'o' ] does not contain at least one item that does equal 'o'`);
            });
        });

        describe('endsWith,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that('Hello', not(endsWith('o'))),
                )).to.be.rejectedWith(AssertionError, `Expected 'Hello' to not end with 'o'`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal('o');
                        expect(error.actual).to.equal('Hello');
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that('Hello', not(endsWith('o'))).toString())
                    .to.equal(`#actor ensures that 'Hello' does not end with 'o'`);
            });
        });

        describe('equals,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that(true, not(equals(true))),
                )).to.be.rejectedWith(AssertionError, `Expected true to not equal true`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal(true);
                        expect(error.actual).to.equal(true);
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that(true, not(equals(true))).toString())
                    .to.equal(`#actor ensures that true does not equal true`);
            });
        });

        describe('isTrue,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that(true, not(isTrue())),
                )).to.be.rejectedWith(AssertionError, `Expected true to not equal true`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal(true);
                        expect(error.actual).to.equal(true);
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that(true, not(isTrue())).toString())
                    .to.equal(`#actor ensures that true does not equal true`);
            });
        });

        describe('isFalse,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that(false, not(isFalse())),
                )).to.be.rejectedWith(AssertionError, `Expected false to not equal false`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal(false);
                        expect(error.actual).to.equal(false);
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that(false, not(isFalse())).toString())
                    .to.equal(`#actor ensures that false does not equal false`);
            });
        });

        describe('includes,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that('Hello', not(includes('Hello'))),
                )).to.be.rejectedWith(AssertionError, `Expected 'Hello' to not include 'Hello'`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal('Hello');
                        expect(error.actual).to.equal('Hello');
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that('Hello', not(includes('Hello'))).toString())
                    .to.equal(`#actor ensures that 'Hello' does not include 'Hello'`);
            });
        });

        describe('isGreaterThan,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that(2, not(isGreaterThan(1))),
                )).to.be.rejectedWith(AssertionError, `Expected 2 to not have value greater than 1`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal(1);
                        expect(error.actual).to.equal(2);
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that(2, not(isGreaterThan(1))).toString())
                    .to.equal(`#actor ensures that 2 does not have value greater than 1`);
            });
        });

        describe('isLessThan,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that(1, not(isLessThan(2))),
                )).to.be.rejectedWith(AssertionError, `Expected 1 to not have value that's less than 2`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal(2);
                        expect(error.actual).to.equal(1);
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that(1, not(isLessThan(2))).toString())
                    .to.equal(`#actor ensures that 1 does not have value that's less than 2`);
            });
        });

        describe('or,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that(1, not(or(isGreaterThan(0), isLessThan(2)))),
                )).to.be.rejectedWith(AssertionError, `Expected 1 to not have value greater than 0 or have value that's less than 2`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal(0);
                        expect(error.actual).to.equal(1);
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that(1, not(isLessThan(2))).toString())
                    .to.equal(`#actor ensures that 1 does not have value that's less than 2`);
            });
        });

        describe('startsWith,', () => {

            it('produces a sensible error message', () => {
                return expect(actorCalled('Astrid').attemptsTo(
                    Ensure.that('Hello', not(startsWith('H'))),
                )).to.be.rejectedWith(AssertionError, `Expected 'Hello' to not start with 'H'`)
                    .then((error: AssertionError) => {
                        expect(error.expected).to.equal('H');
                        expect(error.actual).to.equal('Hello');
                    });
            });

            it('contributes to a human-readable description', () => {
                expect(Ensure.that('Hello', not(startsWith('H'))).toString())
                    .to.equal(`#actor ensures that 'Hello' does not start with 'H'`);
            });
        });
    });
});
