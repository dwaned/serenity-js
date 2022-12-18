import { spawner, SpawnResult } from '@integration/testing-tools';
import * as path from 'path';

const jasmineExecutable = path.resolve(
    require.resolve('jasmine'),
    '..',
    '..',
    'bin',
    'jasmine.js',
);

const jasmineSpawner = spawner(
    jasmineExecutable,
    { cwd: path.resolve(__dirname, '..') },
);

/**
 * @see https://jasmine.github.io/setup/nodejs.html
 * @param {string[]} params
 */
export function jasmine(...params: string[]): Promise<SpawnResult> {
    return jasmineSpawner(
        ...params,
        '--random=false',
        '--reporter=./node_modules/@serenity-js/jasmine/lib/index.js',      // todo: fix exports so that I don't need to add /lib/index.js
        `--require=${ path.resolve(__dirname, '../examples/setup.js') }`,
    );
}
