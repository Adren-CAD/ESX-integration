// Basic ESX
const io = require('socket.io-client');

const init = () => {
	let APIKey = Config.APIKey;

	if (!APIKey || APIKey.length == 0) return console.log('^1Invalid Token!^0');

	let socket = io(Config.APIURL, {
		extraHeaders: { APIKey },
	});

	console.log('^2Beginning script init function.^0');

	socket.emit('setup', { pluginName: 'basicESX' });

	socket.on('log', (str) => console.log(str));
};

try {
	init();
} catch (err) {
	console.log('^1Error connecting to AdrenCAD Servers.^0');

	console.log(
		'^1The Evidence Script cannot be started, please try again later.^0'
	);
}
