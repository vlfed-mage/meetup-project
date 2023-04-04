import { createContext, useState, ReactNode } from 'react';

import { Meetup } from '../components/pages/all-meetups';

interface FavoritesContextData {
    favorites: Meetup[];
    total: number;
    addFavorite: (favoriteMeetup: Meetup) => void;
    removeFavorite: (meetupId: string) => void;
    itemIsFavorite: (meetupId: string) => Boolean;
}

interface FavoritesContextProviderProps {
    children: ReactNode;
}

const FavoritesContext = createContext<Pick<FavoritesContextData, 'favorites' | 'total'>>({
    favorites: [],
    total: 0,
});

export const FavoritesContextProvider = ({ children }: FavoritesContextProviderProps) => {
    const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

    const addFavoriteHandler = (favoriteMeetup: Meetup): void => {
        setUserFavorites(prevUserFavorites => {
            console.log(favoriteMeetup, prevUserFavorites);
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };

    const removeFavoriteHandler = (meetupId: string): void => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    };

    const itemIsFavoriteHandler = (meetupId: string): Boolean => {
        return userFavorites.some(meetup => meetup.id === meetupId);
    };

    const context: FavoritesContextData = {
        favorites: userFavorites,
        total: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContext;
