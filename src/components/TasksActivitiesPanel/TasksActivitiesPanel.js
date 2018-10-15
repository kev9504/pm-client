import React from 'react';
import classes from './TasksActivitiesPanel.css';
import Tasks from './Tasks/Tasks';
import Activities from './Activities/Activities';

const tasksActivitiesPanel=(props)=>{
    let component;
    switch (props.panelType) {
        case 'tasks':
            component=<Tasks 
            data={props.panelData}
            postTaskHandler={props.postTaskHandler}
            updateTaskHandler={props.updateTaskHandler}/>;
            break;
        case 'activities':
            component=<Activities 
            postActivityHandler={props.postActivityHandler}
            data={props.panelData}/>;
            break;
        default:
            component=null;
    }
    
    return(
        <div className={classes.Main}>
        {component}
        </div>
        );
};

export default tasksActivitiesPanel;