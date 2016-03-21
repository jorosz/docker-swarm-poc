module.exports = {
	dev: {
		files: [
			{
				expand: true,
				cwd: 'public',
				src: '*',
				dest: 'www/'
			}
		]
	}
};