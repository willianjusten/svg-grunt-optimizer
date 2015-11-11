## SVG Grunt Optimizer 

Some tests to optimize svg using Grunt, svgo, svg2png and grunt-svgstore.

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GruntJs](http://gruntjs.com/)

```sh
# Clone this repository
$ git clone git://github.com/willianjusten/svg-grunt-optimizer.git new_project
$ cd new_project

# install dependencies
$ npm install

# install svgo global in order to optimize svg 
$ npm install -g svgo
```

With the commands above, you have everything to start. Just paste your svg files to `original` folder.

### Folders and Files

```sh
new_project -
    /build -
        svg-defs.svg
    /compressed -
        svg images
    /original
        your original svg w/o optimization
    /png
        png generated for fallback
    .gitignore
    Gruntfile.js
    package.json
    Readme.md
```

### Tasks

- `grunt`: optimize, create defs and generate png.
- `grunt shell`: optimize svg.
- `grunt svgstore`: create defs file.
- `grunt svg2png`: generate png files.

### License

This tool is free and open source software, distributed under the The MIT License. So feel free to use this to create your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.