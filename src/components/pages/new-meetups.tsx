import React from 'react';
import axios from 'axios';

import { NewMeetupForm } from '../meetups';
import { useNavigate } from 'react-router-dom';

export interface MeetupData {
    title: string | undefined;
    image: string | undefined;
    address: string | undefined;
    description: string[] | undefined;
}

const NewMeetups = () => {
    const navigate = useNavigate();
    const addMeetupHandler = (meetupData: MeetupData) => {
        axios
            .post('https://meetup-project-98980-default-rtdb.firebaseio.com/meetups.json', meetupData)
            .then(() => {
                navigate('/', { replace: true });
            })
            .catch(e => {
                throw new Error(e);
            });
    };

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetups;
