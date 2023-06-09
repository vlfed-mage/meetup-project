import React from 'react';

import classes from '../../styles/meetup-list.module.css';
import { Meetup } from '../pages/all-meetups';

import MeetupItem from './meetup-item';

interface Meetups {
    meetups: Meetup[];
}

const MeetupList = ({ meetups }: Meetups) => {
    return meetups.length ? (
        <ul className={classes.list}>
            {meetups?.map(meetup => (
                <MeetupItem key={meetup.id} {...meetup} />
            ))}
        </ul>
    ) : (
        <p>There is no content yet</p>
    );
};

export default MeetupList;
