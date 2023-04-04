import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

const useFavorites = () => useContext(FavoritesContext);

export default useFavorites;
