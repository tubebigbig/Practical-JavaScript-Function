import map from "./index";

const NULL = null;
const UNDEFINED = undefined;
const MOCK_DATA = [1, 2, 3];

describe("test map", function () {
  it("map throw", function () {
    expect(() => map.call(NULL, () => {})).toThrow(
      `${NULL}.map is not a function`
    );
  });

  it("map throw", function () {
    expect(() => map(() => {})).toThrow(`${UNDEFINED}.map is not a function`);
  });

  it("map sub 2", function () {
    expect(map.call([1, 2, 3], (item: number) => item - 2)).toStrictEqual([
      -1, 0, 1,
    ]);
  });

  it("map multiple 2", function () {
    expect(map.call(MOCK_DATA, (item: number) => item * 2)).toStrictEqual([
      2, 4, 6,
    ]);
  });
});
