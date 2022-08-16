function getSteamIdentifier(source) {
	let identifierCount = GetNumPlayerIdentifiers(source);

	let steamIdentifier = null;

	for (let i = 0; i < identifierCount; i++) {
		const identifier = GetPlayerIdentifier(source, i);

		if (identifier.startsWith('steam:')) {
			steamIdentifier = identifier;
		}
	}

	return steamIdentifier;
}
