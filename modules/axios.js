const axios = require('axios');

const API = axios.create({
	baseURL: `${Config.APIURL_SECOND}/internal/community/integrations/ESX`,
	timeout: 1000,
	headers: { APIKey: Config.APIKey },
});
