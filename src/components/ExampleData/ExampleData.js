import React from 'react';
import classes from './ExampleData.module.css';

const exampleData = (props) => {

    const keys = Object.keys(props.exampleData);
    const dataRows = [];
    for(let i=0; i<keys.length; i+=2){
        dataRows.push(
            <tr>
                <td className={classes.LeftCell}>{keys[i]}</td>
                <td className={classes.RightCell}>"{props.exampleData[keys[i]]}"</td>
                {(i < keys.length-1) ? 
                <td className={classes.LeftCell}>{keys[i+1]}</td>
                : null}
                {(i < keys.length-1) ? 
                <td className={classes.RightCell}>"{props.exampleData[keys[i+1]]}"</td>
                : null}
            </tr>
        );
    }

    return (
        <div className={classes.ExampleData}>
            <table className={classes.Table}>
                {dataRows}
            </table>
        </div>
    );
}

export default exampleData;