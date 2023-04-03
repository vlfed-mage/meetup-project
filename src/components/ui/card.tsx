import React, { ReactNode } from 'react';

import classes from '../../styles/card.module.css';

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps) => {
    return <div className={classes.card}>{children}</div>;
};

export default Card;
