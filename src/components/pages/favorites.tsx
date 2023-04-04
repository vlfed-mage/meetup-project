import React from 'react';

import { useFavorites } from '../hooks';
import { MeetupList } from '../meetups';

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <section>
            <h1>Favorites Meetups</h1>
            <MeetupList meetups={favorites} />
        </section>
    );
};

export default Favorites;
