import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h2 className="card__title">{props.monster.name}</h2>
        <p className="card__text">{props.monster.email}</p>
    </div>
);