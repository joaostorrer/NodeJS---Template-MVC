module.exports.index = function(application, req, res) {

	var connection = application.config.dbConnection();
	var modelDAO = new application.app.models.modelDAO(connection);
}