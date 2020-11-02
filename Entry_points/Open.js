

// var Vue = require ("vue/dist/vue.esm.js").default;
const Vue = require ("vue/dist/vue.esm.js").default;
const Renderer = eval ("require") ('vue-server-renderer').createRenderer ()

// const Script = new Vue ({
//     template: `<div>Hello World</div>`
// });
// var App = require ("../Stack/Public/Scripts/Entry-Server.js");
// console.log (App.default);


// const app = require ("../Stack/Public/Scripts/Home.js") ({
// 	Settings: {
// 		Title: "Pacalmo"
// 	}
// });
//
//

// const Script = new Vue ({
//     template: `<div>Hello World</div>`
// });
// Renderer.renderToString (Script, (err, html) => {
//     if (err) throw err;
//
//     console.log ({ html })
// });


// var App = require ("../Scripts/Entry_points_server/Entry-Server.js");
var App = require ("Entry-Server.js") ({
	Vue
});
Renderer.renderToString (App, (err, html) => {
    if (err) throw err;

    console.log ({ html })
});
