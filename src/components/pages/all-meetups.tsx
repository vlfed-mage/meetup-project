import React, { useState, useEffect } from 'react';

import { MeetupList } from '../meetups';
import axios from 'axios';

export interface Meetup {
    id: string | number;
    title: string;
    image: string;
    address: string;
    description: string[];
}

const AllMeetups = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Meetup[]>([]);

    useEffect(() => {
        setLoading(true);
        axios.get('https://meetup-project-98980-default-rtdb.firebaseio.com/meetups.json').then(({ data }) => {
            setData(
                Object.entries(data).map(([id, value]) => {
                    const meetupData = value as Omit<Meetup, 'id'>;
                    return {
                        id,
                        title: meetupData.title,
                        image: meetupData.image,
                        address: meetupData.address,
                        description: meetupData.description,
                    };
                })
            );
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <section>
                <span>loading...</span>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={data} />
        </section>
    );
};

export default AllMeetups;
