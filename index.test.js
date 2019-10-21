const a = require('./index.js');

describe('test1', () => {
    test('a() count 14', () => {
        const result = a()()()()()()()()()()()()()().count;
        expect(result).toEqual(14);
    });
    test('a() count 10', () => {
        const result = a()()()()()()()()()().count;
        expect(result).toEqual(10);
    });
    test('a() count 8', () => {
        const result = a().a().a().a().a().a().a().a().count;
        expect(result).toEqual(8);
    });
    test('a() count 8', () => {
        const result = a().a().a().a().a().a().a().a().a().a().count;
        expect(result).toEqual(10);
    });
})