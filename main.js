require.config({
  paths: {
    'sizzle': 'public/lib/jquery/src/sizzle/dist/sizzle',
    'chai': 'public/lib/chai/chai'
  }
})

require([
  'public/lib/jquery/src/jquery',
  'public/lib/lodash/dist/lodash',
  'chai',
  'test-runner'
], function main ($, _, chai, test) {
  'use strict';

  test.add('empty', function () {

  })

  test.run()

})

;
