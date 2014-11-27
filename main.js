require.config({
  paths: {
    'sizzle': 'public/lib/jquery/src/sizzle/dist/sizzle'
  }
})

require([
  'public/lib/jquery/src/jquery',
  'public/lib/lodash/dist/lodash'
], function main ($, _) {
  'use strict';

  console.log('hello, world')
})

;
