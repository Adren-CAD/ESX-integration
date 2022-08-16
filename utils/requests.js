function verifyCharacter(data) {
	return API.post('/characters/verify', data);
}

function deleteCharacter(data) {
	return API.post('/characters/delete', data);
}
