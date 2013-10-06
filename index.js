var wintersmith = require('wintersmith')

// create the sites environment, can also be called with a config object. e.g.
// {contents: '/some/contents', locals: {powerLevel: 10}}, ..}
var env = wintersmith('./config.json')

// build site
env.build(function(error) {
	if (error) throw error
	console.log('Done!')
})

// preview
/*env.preview(function(error, server) {
	if (error) throw error
	console.log('Server running!')
})*/

// do something with the content tree
/*env.load(function(error, result) {
	if (error) throw error
	console.log('Contents loaded!')
});*/
