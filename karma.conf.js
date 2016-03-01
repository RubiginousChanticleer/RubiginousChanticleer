// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      // angular source
      'client/lib/angular/angular.js',
      'client/lib/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'client/lib/angular-socket-io/mock/socket-io.js',
      'client/lib/angular-socket-io/socket.js',

      // our app code
      'client/app/**/*.js',

      // our spec files
      'test/client/**/*spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: {
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan','unicorn'],


    // web server port
    port: 9000,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Setting the autoWatch option to true will instruct karma to start a server and watch for changes to files, running tests automatically
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers. PhantomJS will load up in the background
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // The singleRun: false option will tell grunt to keep the karma server up after a test run.
    singleRun: true,

    // plugins: ['karma-script-launcher','karma-mocha', 'karma-coverage', 'karma-chai', 'karma-chrome-launcher'],
  });
};
