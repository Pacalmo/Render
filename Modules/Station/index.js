
/*


*/

module.exports = function ({
	Port
}) {
	return new Promise (Resolve => {
		var Station = require ("http").createServer ((req, res) => {
			const { url, method } = req;
			if (url === "/" && method === "POST") {
				require ("Receive/JSON") ({
					req,
					Conclude: ({ Bracket }) => {
						const Settings = require ("lodash/get") (Bracket, [ "Settings" ], {});

						const Renderer = eval ("require") ('vue-server-renderer').createRenderer ()

						var { App } = require ("App") ({
							Vue: require ("vue/dist/vue.esm.js").default,
							Settings
						});

						Renderer.renderToString (App, (err, html) => {
						    if (err) {
								res.statusCode = 500;
								res.end ();
								return;
							}

							// console.log ({ html });

							res.statusCode = 200;
							res.write (html);
							res.end ();
						});
					}
				});
				return;
			}

			if (url === "/" && method === "GET") {
				const Renderer = eval ("require") ('vue-server-renderer').createRenderer ()

				var { App } = require ("App") ({
					Vue: require ("vue/dist/vue.esm.js").default,
					Settings: {
						Title: "Pacalmo"
					}
				});

				Renderer.renderToString (App, (err, html) => {
				    if (err) {
						res.statusCode = 500;
						res.end ();
						return;
					}

					res.statusCode = 200;
					res.write (html);
					res.end ();
				});
				return;
			}

			res.statusCode = 404;
			res.end ();
		});

		Station.listen (Port, () => {
			const { port, address, family } = Station.address();
			console.log (`Render Station ready at ${ address }:${ port }`);

			Resolve ();
		});
	});
}
