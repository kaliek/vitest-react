import { describe, expect, test} from 'vitest';
import { sum } from './math';

describe("sum", () => {
    test("Should return 2", () => {
        expect(sum(1, 1)).toEqual(2);
    })
})