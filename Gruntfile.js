module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      target: {
        command: 'svgo -f _source_review/serie-a/ -o compressed_review/serie-a --multipass -p 2 && svgo -f _source_review/serie-b/ -o compressed_review/serie-b --multipass -p 2 && svgo -f _source_review/europa/ -o compressed_review/europa --multipass -p 2' 
      },
      options: {
        stdout: true
      }
    },

    svgstore: {
      dist: {
        files: {
          'build/serie-a-defs.svg': ['compressed_review/serie-a/*.svg'],
          'build/serie-b-defs.svg': ['compressed_review/serie-b/*.svg'],
          'build/europa-defs.svg': ['compressed_review/europa/*.svg']
        },
      },
      options: {
        cleanup: true
      }
    },
    svg2png: {
      dist: {
        files: [{ 
          flatten: true,
          cwd: 'compressed_review/', 
          src: ['**/*.svg'], 
          dest: 'png' }
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-svg2png');

  // svg tasks
  grunt.registerTask('svg', ['shell', 'svgstore', 'svg2png']);
};