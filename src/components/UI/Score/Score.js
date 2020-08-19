import React from 'react';

const score = (props) => (
    props.show
    ? <p>{props.correct}/{props.total}</p>
    : null
);

export default score;