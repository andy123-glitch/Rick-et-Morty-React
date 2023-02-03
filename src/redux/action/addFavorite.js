export const addFavorite = favorite => ({
	type: 'addFavorite',
	payload: {
		favorites:favorite
	},
});
