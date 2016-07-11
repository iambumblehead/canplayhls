canplayhls
==========

A packaged version of a method found in [video-contrib-hls][10].

Detection of browser [support for various media][11] is [never certain][12], but this method seems to be accurate enough.


```javascript
var canplayhls = require('canplayhls');

if (canplayhls) {
    console.log('I can _probably_ play hls');
}
```


[10]: https://github.com/videojs/videojs-contrib-hls/blob/56cb87482d0f7fe473ca5085e37f5dd61e42cce1/src/videojs-contrib-hls.js
[11]: https://www.reddit.com/r/shittyprogramming/comments/3e9dts/the_worst_return_values_for_a_checkmethod_that/
[12]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType



(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
