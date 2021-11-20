# lambda-fibonacci

Implementation of the Fibonacci sequence in JS using pure lambda calculus (except for printing the list at the end), using Church encoding for data.

The only rules available in lambda calculus are:

- A character or string can represent a variable: `X = ...`
- A function can be defined with parameters and a body, with the arguments becoming bound: `Y = a => ...`
- A function can be applied to an argument: `Y(X)`

That means no operators, no numbers, no loops, no self-referential functions, and no state.

These rules are actually enough to calculate anything that a Turing Machine can, so it's turing complete. In this JS file I've written a few functions and put them together to calculate the first few terms of the fibonacci sequence.

You can run the code here (the code output is in the console): https://jsfiddle.net/OscarSaharoy/us64m7rn/

The functions used:

![](https://github.com/OscarSaharoy/lambda-fibonacci/blob/main/img.PNG)
