# Carousel Code - Media Monks exercise

[Exercise brief]
Whit your gut and sweat you will be making the slicker image carousel in the internet. This carouse should be controlled by clicking the round arrow buttons. The carousel should be populated with provided feed. Adding extra functionality is always a plus.

## Installation

1. Clone the repository, and open a shell terminal within the project's root
   directory.

1. After [installing Node.js and NPM], install the gulp.

   ```
   npm install --global gulp-cli
   ```

1. Install the project packages.

   ```
   npm install
   ```

1. Run the default `gulp` command creating a local server at
   [`http://localhost:5000`](http://localhost:5000). Gulp will continue to watch
   all files to monitor for any changes.

   ```
   gulp
   ```
## GSAP TweenLite library

TweenLite library is in use to move each slide.

## Extra functionalities:
* Keyboard arrows controlled
* Infinite scroll
* Auto animation

## Optimizations

* Replace arrow image buttons for css shapes to improve performance and get better results in high resolution displays.
* Removes unnecessary HTML elements (exit div for example).
* Arrows and logo zone was restructured, adding a container div.
* Absolute position removed in all elements except .slide item.
* Line image was replaced with css border property.
* The images were optimized
