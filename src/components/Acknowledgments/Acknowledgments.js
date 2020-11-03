import React from 'react';
import classes from './Acknowledgments.module.css';

const acknowledgments = () => (
    <div className={classes.Acknowledgments}>
        <h1>Acknowledgments</h1>
        <p>Exercises adapted from Fromkin, Rodman and Hyams, 2017. An Introduction to Language. 11e. Cengage.</p>
        <p>Language family information from various Wikipedia pages.</p>
        <p>Flag images: https://www.countryflags.com, https://www.crwflags.com</p>
        <p>Web developer: Rachel Fairbairn</p>
    </div>
);

export default acknowledgments;