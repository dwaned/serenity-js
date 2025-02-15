import { Actor, Expectation, Question, QuestionAdapter } from '@serenity-js/core';

export function p<T>(value: T): Promise<T> {
    return Promise.resolve(value);
}

export function q<T>(value: T): QuestionAdapter<Awaited<T>> {
    return Question.about(`something`, (_: Actor) => value);
}

export function isIdenticalTo<T>(expected: T): Expectation<T> {
    return Expectation.thatActualShould<T, T>('have value identical to', expected)
        .soThat((actualValue: T, expectedValue: T) => actualValue === expectedValue);
}
