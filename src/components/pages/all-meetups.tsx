import React, { FC } from 'react';

import MOCK_DATA from '../../data';
import MeetupList from '../meetups/meetup-list';

const AllMeetups: FC = () => {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={MOCK_DATA} />
        </section>
    );
};

export default AllMeetups;
