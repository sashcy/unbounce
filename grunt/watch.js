module.exports = function (grunt) {
  return {
    html: {
      files: ['src/**/*.html'],
      tasks: ['copy'],
    },
    css: {
      files: ['src/sass/*.scss'],
      tasks: ['stylelint', 'sass', 'postcss', 'cssmin', 'copy'],
    },
    images: {
      files: ['src/assets/images/*'],
      tasks: ['imagemin'],
    },
    svg: {
      files: ['src/assets/svg/*'],
      tasks: ['svgmin'],
    },
    options: {
      spawn        : false,
      interrupt    : true,
      debounceDelay: 250,
      livereload: true,
      }, 
};
  };
