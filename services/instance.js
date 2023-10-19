import axios from 'axios'
import settings from './settings'

export default axios.create({
	baseURL: settings.API_URL,
	headers: {
		'Content-type': 'application/json',
		Accept: 'application/json',
	},
})
