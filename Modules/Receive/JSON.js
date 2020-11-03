

module.exports = function ({
	Limit = 5000,
	req,
	res,
	Conclude
}) {
	var Stream = '';
	req.on ('data', chunk => {
		Stream += chunk;

		if (Stream.length > Limit) {
			res.statusCode = 403;
			res.write ("Request exceeded bit limit.")
			res.end ();
		}
	});
	req.on('end', () => {
		var Bracket = null;

		try {
			Bracket = JSON.parse (Stream);
		}
		catch (Throw) {
			Bracket = null;
			res.statusCode = 403;
			res.write ("Body not parseable as JSON.")
			res.end ();
			return;
		}

		Conclude ({ Bracket })
	});
}
