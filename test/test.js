// jshint mocha:true, node:true

var assert = require('assert');
var rimraf = require('rimraf');
var base64ToImage = require('../');

var base64Image = 'data:image/gif;base64,R0lGODdhMgAyAOMAAMzMzJaWlpycnKOjo7e3t8XFxbGxsaqqqr6+vgAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAMgAyAAAEbRDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987/81wYBAEBAuQqLxJZAMCgOkE8ocRqOAgwGbvL4KgEETWwiAAWBx+HUcPMkChKT9ZgsMxWO4OL/ngYCBgoOEhYaHiImKi4yNjo+QgBEAOw==';

// Clean up any image files present
rimraf.sync('./test/dump/*');


describe('base64-to-image', function () {
  it('should create an image file with the given name', function(done) {

    base64ToImage(base64Image, './test/dump', 'image', function(err, imgPath) {
      if(err) {
        return done(err);

      }

      assert(imgPath);
      assert(imgPath.indexOf('image') !== -1);

      // clean up
      rimraf.sync(imgPath);

      done();
    });
  });


  it('should create an image file with a random name', function(done) {

    base64ToImage(base64Image, './test/dump',  function(err, imgPath) {
      if(err) {
        return done(err);

      }

      assert(imgPath);
      assert(imgPath.indexOf('image') === -1);

      // clean up
      rimraf.sync(imgPath);

      done();
    });
  });
});
