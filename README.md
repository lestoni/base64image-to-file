# base64image-to-file

[![Build Status](https://travis-ci.org/lestoni/base64image-to-file.svg?branch=master)](https://travis-ci.org/lestoni/base64image-to-file)

[![NPM](https://nodei.co/npm/base64image-to-file.png?downloads=true&stars=true)](https://nodei.co/npm/base64image-to-file/)


The module takes a base64 encoded image string(i.e data-url) and creates an image file from it.

## Install

```sh
  $ npm install base64image-to-file --save
```

## Usage

```javascript
  var base64ImageToFile = require('base64image-to-file');

  var base64Image = 'data:image/gif;base64,R0lGODdhMgAyAOM...';

  // create an image with the a given name ie 'image'
  base64ImageToFile(base64Image, '/tmp/', 'image', function(err) {
    if(err) {
      return console.error(err);
    }

    console.log(imgPath);
  });

  // create an image with the a random name(basically hex string)
  base64ImageToFile(base64Image, '/tmp/', function(err) {
    if(err) {
      return console.error(err);
    }

    console.log(imgPath);
  });
```

## API

### base64ImageToFile(base64String, dirPath [, imageName], cb)

__base64String__

Type: String

This should be a base64 encoded string.

__dirPath__

Type: String

Directory to create the image in.

__imageName(Optional)__

Type: String

Name to give the created file, otherwise it is given a random name

__cb__

Type: Function

Callback function with signature `cb(err, imgPath)`.


## License

MIT.
