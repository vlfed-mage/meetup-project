import React from 'react';

import classes from '../../styles/meetup-item.module.css';
import { Meetup } from '../pages/all-meetups';

import Card from '../ui/card';

const MeetupItem = (props: Meetup) => {
    const { image, address, title, description } = props;
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
                    <button>To favorites</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
