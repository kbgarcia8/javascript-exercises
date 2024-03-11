const helloWorld = require('./helloWorld'); //to import the code from the javascript file

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
  // describes what should be happening in plain english and then includes the `expect()` function
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
