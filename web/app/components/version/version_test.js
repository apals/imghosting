'use strict';

describe('imghosting.version module', function() {
  beforeEach(module('imghosting.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
