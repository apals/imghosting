'use strict';

angular.module('imghosting.version', [
  'imghosting.version.interpolate-filter',
  'imghosting.version.version-directive'
])

.value('version', '0.1');
