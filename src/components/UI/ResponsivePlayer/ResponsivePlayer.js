import React from 'react';
import ReactPlayer from 'react-player';

import classes from './ResponsivePlayer.module.css';

const responsivePlayer = (props) =>  (
    <div className={classes.PlayerWrapper}>
        <ReactPlayer 
            className={classes.ReactPlayer}
            url={props.url}
            width='100%'
            height='100%'
             />
    </div>
);

export default responsivePlayer;