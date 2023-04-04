import React from 'react';

import classes from '../../styles/meetup-item.module.css';
import { useFavorites } from '../hooks';

import { Meetup } from '../pages/all-meetups';

import Card from '../ui/card';

const MeetupItem = (props: Meetup) => {
    const { id, image, address, title, description } = props;
    const { addFavorite, removeFavorite, itemIsFavorite } = useFavorites();

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite({
                id,
                image,
                address,
                title,
                description,
            });
        }
    };

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={image} alt='' />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <div>
                        {description.map((line, idx) => (
                            <p key={idx}>{line}</p>
                        ))}
                    </div>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite(id) ? 'Remove from favorites' : 'To favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
