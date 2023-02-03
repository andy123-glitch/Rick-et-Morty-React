export const delFavorite = favorite => ({
	type: 'delFavorite',
	payload: {
		favorites:favorite.id
	},
});