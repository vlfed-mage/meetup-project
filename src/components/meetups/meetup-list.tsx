import React from 'react';

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

const MeetupList = (props: Meetups) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => (
                <MeetupItem key={meetup.id} {...meetup} />
            ))}
        </ul>
    );
};

export default MeetupList;
