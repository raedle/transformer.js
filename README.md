# transformer.js
A JavaScript library for 3d transformations

## Motivation
While working on a zoomable drawing canvas for mobile and desktop use, I figured out that it was incredibly difficult to find a web library that—out-of-the-box—supports panning, scaling, and rotation of HTML and SVG elements. The few libraries that I found did not really fulfill all requirements, which are basic 2d transformations of visual elements in arbitrary nested hierarchies. Therefore, I found myself spending time on implementing transformer.js to exactly meet my requirements. Maybe this will be useful for someone else, which is why I want to share it with the public as open source project.

# Documentation

The documentation will be updated gradually. In the meantime try out the examples at https://raedle.github.io/transformer.js

# Development

This is a [Node.js](https://nodejs.org/) project and requires Node.js version >= 8.

* Clone project `git clone https://github.com/raedle/transformer.js.git`
* Go to project root `cd transformer.js`
* Run `npm install` to install all project dependencies. All dependencies are listed in the [package.json](package.json) file.
* Run `npm start` to run examples. The command should also open a browser at http://localhost:8080. If not, then open browser and point it to http://localhost:8080

# Download
The library can be found under [release](https://github.com/raedle/transformer.js/releases) in this GitHub project.
