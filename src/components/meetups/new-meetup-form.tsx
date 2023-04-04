import React, { FormEvent, useRef } from 'react';

import classes from '../../styles/new-meetup-form.module.css';

import Card from '../ui/card';

const NewMeetupForm = () => {
    const titleInputRef = useRef<HTMLInputElement | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const addressInputRef = useRef<HTMLInputElement | null>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const title = titleInputRef.current?.value;
        const image = imageInputRef.current?.value;
        const address = addressInputRef.current?.value;
        const description = descriptionInputRef.current?.value.split('\n');

        const meetupData = {
            title,
            image,
            address,
            description,
        };

        console.log(meetupData);
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup description</label>
                    <textarea rows={5} required id='description' ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button type='submit'>Add meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
