module.exports = {
    all: {
        options: {
			plugins: [
				{
					removeViewBox: false
				}, {
					removeUselessStrokeAndFill: false
				}
			]
		},
        files: [
            {
                expand: true, 
                cwd: 'src/', 
                src: ['assets/svg/**/*.svg'],                           
                dest: 'dist' 
            },
        ]
    }
};