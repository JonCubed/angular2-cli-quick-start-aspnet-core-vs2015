module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      { pattern: 'wwwroot/vendor/es6-shim/es6-shim.js', included: true, watched: false },
      { pattern: 'wwwroot/vendor/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'wwwroot/vendor/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'wwwroot/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false },
      { pattern: 'wwwroot/vendor/systemjs/dist/system.src.js', included: true, watched: false },
      { pattern: 'wwwroot/vendor/zone.js/dist/async-test.js', included: true, watched: false },

      { pattern: 'config/karma-test-shim.js', included: true, watched: true },

      // Distribution folder.
      { pattern: 'wwwroot/**/*', included: false, watched: true }
    ],
    exclude: [
      // Vendor packages might include spec files. We don't want to use those.
      'wwwroot/vendor/**/*.spec.js'
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
