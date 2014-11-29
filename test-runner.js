/* global define: false */

define([], function testRunnerMake () {
  'use strict';

  var tests = []

  function addTest (desc, test) {
    test.desc = desc

    tests.push(test)
  }

  function runTests () {
    var report = ''

    for (var i = 0, len = tests.length; i < len; i += 1) {
      try {
        tests[i]()
        report += '.'
      } catch (e) {
        console.log('Failed: ' + tests[i].desc)
        report += 'x'
      }
    }

    var total = report.length
    var passed = report.replace('x', '').length

    console.log(report)
    console.log(passed + ' passed out of a total ' + total + ' taken.')
  }

  return {
    add: addTest,
    run: runTests
  }
})
