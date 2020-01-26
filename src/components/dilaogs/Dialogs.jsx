import React from 'react';
import classes from './Dialogs.module.css';
const Dialogs = (props)=>{
    return(
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItem}>
                <div className= {classes.dialog + ' ' + classes.active}>
                    <NavLink>Sasha<NavLink>
                </div>
                <div className={classes.dialog}>
                    Masha
                </div>
                <div className={classes.dialog}>
                    Dasha
                </div>
                <div className={classes.dialog}>
                    Kostya
                </div>
            </div>
            <div className = {classes.messages}>
               <div className = {classes.message}>
                   Hi
               </div>
                <div className = {classes.message}>
                   How are you
               </div>
                <div className = {classes.message}>
                   YO
               </div>
            </div>

        </div>
    )
}


export default Dialogs