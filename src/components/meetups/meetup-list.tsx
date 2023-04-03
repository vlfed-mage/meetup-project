import React, { FC } from 'react';

import classes from '../../styles/meetup-list.module.css';
import MeetupItem from './meetup-item';

export interface Meetup {
    id: string | number;
    title: string;
    image: string;
    address: string;
    description: string;
}

interface Meetups {
    meetups: Meetup[];
}

const MeetupList: FC<Meetups> = props => {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => (
                <MeetupItem key={meetup.id} {...meetup} />
            ))}
        </ul>
    );
};

export default MeetupList;
