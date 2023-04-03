import React, { FC } from 'react';

import classes from '../../styles/meetup-item.module.css';
import { Meetup } from './meetup-list';

import Card from '../ui/card';

const MeetupItem: FC<Meetup> = props => {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt='' />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>To favorites</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
