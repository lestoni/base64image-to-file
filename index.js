'use strict';

/**
 * Load Module Dependencies.
 */
var fs     = require('fs');
var crypto = require('crypto');

var mkdirp  = require('mkdirp');

var regex = /^data:([A-Za-z-+\/]+);base64,(.+)$/;

/**
 * Original idea from http://stackoverflow.com/questions/20267939/nodejs-write-base64-image-file
 */
function decode (dataString, cb) {
  var matches = dataString.match(regex) || { length: 0 };
  var info    = {};

  if(matches.length !== 3) {
    return cb(new Error('Invalid base64 encoded image'));

  }

  info.type = matches[1];
  info.buffer = new Buffer(matches[2], 'base64');

  cb(null, info);
}


/**
 * Write base64 encoded image to file.
 *
 * @desc
 *
 * @param {String} base64String base64 encoded image
 * @param {String} dirPath      dir path to put image
 * @param {Function} cb         callback function
 */
module.exports = function base64ToImage(base64String, dirPath, imgName, cb) {

  if(arguments.length === 3) {
    cb = imgName;
    imgName = crypto.randomBytes(20).toString('hex');
  }


  decode(base64String, function writeToFile(err, info) {
    if(err) {
      return cb(err);

    }

    var ext     = info.type.split('/')[1];

    mkdirp(dirPath, function (err) {
      if(err) {
        return cb(err);

      }

      var imgPath   = dirPath + '/' + imgName + '.' + ext;

      fs.writeFile(imgPath, info.buffer, function (err) {
        if(err) {
          return cb(err);
        }

        cb(null, imgPath);
      });

    });
  });

};
