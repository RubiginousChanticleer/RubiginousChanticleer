module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'nyan',
          // Require blanket wrapper here to instrument other required
          // files on the fly.
          //
          // NB. We cannot require blanket directly as it
          // detects that we are not running mocha cli and loads differently.
          //
          // NNB. As mocha is 'clever' enough to only run the tests once for
          // each file the following coverage task does not actually run any
          // tests which is why the coverage instrumentation has to be done here
          // require: 'coverage/blanket'
        },
        src: ['test/{server/,*.js}**/*.js']
      }
    },
    coverage: {
      options: {
        reporter: 'html-cov',
        // use the quiet flag to suppress the mocha console output
        quiet: true,
        // specify a destination file to capture the mocha
        // output (the quiet option does not suppress this)
        captureFile: 'coverage.html'
      },
      src: ['test/{server/,*.js}*.js']
    },
    // to run karma 'grunt karma' from terminal
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('mocha', ['mochaTest']);


};
