import React, { FC, ReactNode } from 'react';

import classes from '../../styles/card.module.css';

interface CardProps {
    children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
    return <div className={classes.card}>{children}</div>;
};

export default Card;
