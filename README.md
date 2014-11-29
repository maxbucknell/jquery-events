

# jQuery Sandbox

A clean little environment in which to have fun with jQuery.

To install, clone this repository and run `bower install`. Then you can
put whatever you like inside main.js.

This runs the source version of jQuery 1, split into AMD files. I've
done this so it is easy to see which bit of jQuery you are in, and to
make it easier to find things when you're scrolling around.

## Test runner

I include a very basic test runner, that outputs to the console.

To add a test, call test.add(description, testFn). If an exception is
thrown inside testFn, it fails the test, and informs you. If not, it
passes.

