import { createContext, useState, ReactNode } from 'react';

import { Meetup } from '../components/pages/all-meetups';

interface FavoritesContextData {
    favorites: Meetup[];
    total: number;
    addFavorite: (favoriteMeetup: Meetup) => void;
    removeFavorite: (meetupId: string) => void;
    itemIsFavorite: (meetupId: string) => boolean;
}

interface FavoritesContextProviderProps {
    children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextData>({
    favorites: [],
    total: 0,
    addFavorite: favoriteMeetup => {},
    removeFavorite: meetupId => {},
    itemIsFavorite: meetupId => false,
});

export const FavoritesContextProvider = ({ children }: FavoritesContextProviderProps) => {
    const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

    const addFavoriteHandler = (favoriteMeetup: Meetup): void => {
        setUserFavorites(prevUserFavorites => {
            return [...prevUserFavorites, favoriteMeetup];
        });
    };

    const removeFavoriteHandler = (meetupId: string): void => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    };

    const itemIsFavoriteHandler = (meetupId: string): boolean => {
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
