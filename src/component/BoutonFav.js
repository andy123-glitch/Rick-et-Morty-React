import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import {addFavorite,delFavorite} from '../redux/action/Favorites';

function FavoriteButton({ id, favorites, addFavorite, delFavorite }) {
    const isFavorite = favorites.includes(id);

    const handleClick = () => {
        if (isFavorite) {
            delFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    return (
        <Button
            variant="light"
            className="float-end"
            onClick={handleClick}
            aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
            {isFavorite ? '❤️' : '♡'}
        </Button>
    );
}

const mapStateToProps = state => {
    const { favorites } = state;
    return { favorites };
};

export default connect(mapStateToProps,
    {addFavorite,delFavorite})(FavoriteButton);
