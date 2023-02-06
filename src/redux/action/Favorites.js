export const addFavorite = id => ({
	type: 'addFavorite',
	payload: {
		favorite:id
	},
});

export const delFavorite = id => ({
	type: 'delFavorite',
	payload: {
		favorite:id
	},
});