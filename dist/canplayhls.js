'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
// https://github.com/videojs/videojs-contrib-hls/blob/56cb87482d0f7fe473ca5085e37f5dd61e42cce1/src/videojs-contrib-hls.js
//

/**
 * Whether the browser has built-in HLS support.
 */
var canplayhls = module.exports = function () {
  var doc = (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' && document,
      videoelem = doc && doc.createElement('video'),
      isvideosupport = Boolean(videoelem && videoelem.canPlayType),

  // HLS manifests can go by many mime-types
  canPlay = [
  // Apple santioned
  'application/vnd.apple.mpegurl',
  // Apple sanctioned for backwards compatibility
  'audio/mpegurl',
  // Very common
  'audio/x-mpegurl',
  // Very common
  'application/x-mpegurl',
  // Included for completeness
  'video/x-mpegurl', 'video/mpegurl', 'application/mpegurl'];

  return isvideosupport && canPlay.some(function (canItPlay) {
    return (/maybe|probably/i.test(videoelem.canPlayType(canItPlay))
    );
  });
}();