import HelloWorld from "./../src/business";

describe('HelloWorld', () => {

  test('should return "Hello World"', () => {
    let message = HelloWorld();
    expect(message).toEqual("Hello World");
  });
});