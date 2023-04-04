import React from 'react';

import MOCK_DATA from '../../data';
import { MeetupList } from '../meetups';

const AllMeetups = () => {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={MOCK_DATA} />
        </section>
    );
};

export default AllMeetups;
