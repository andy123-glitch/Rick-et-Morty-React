export const changeUser = user => ({
	type: 'changeUser',
	// On utilise payload pour préciser quel utilisateur est connecté
	payload: {
		user: {
			password: user.password,
			email: user.email,
			token: user.token
		}
	},
});