function verifyCharacterRegistered() {}

async function playerLoaded(playerId, isNew, skin) {
	const xPlayer = ESX.GetPlayerFromId(playerId);

	if (!xPlayer) return;

	const steamIdentifier = getSteamIdentifier(playerId);

	const { variables, identifier } = xPlayer;

	const weapons = findPlayerWeapons();
	const vehicles = findPlayerWeapons();

	const playerData = {
		character: {
			variables,
			weapons,
			vehicles,
		},
		identifier,
		steamIdentifier,
	};

	const { data } = await verifyCharacter(playerData);

	if (data.error) return console.log(`^1${data.error}^0`);

	console.log(`^2${data.message}^0`);
}

async function playerDeleted(identifier) {
	const queryData = { identifier };

	const { data } = await deleteCharacter(queryData);

	if (data.error) return console.log(`^1${data.error}^0`);

	console.log(`^2${data.message}^0`);
}

RegisterNetEvent('esx:playerLoaded');
AddEventHandler('esx:playerLoaded', playerLoaded);

RegisterNetEvent(`CAD-playerDeleted`);
AddEventHandler(`CAD-playerDeleted`, playerDeleted);
