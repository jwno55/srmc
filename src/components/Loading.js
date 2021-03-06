import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    init_box: {
        padding:'20px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        color: '#919191',
        fontWeight: '700',
    },
    init_box_main_title: {
        fontSize: '1.5rem',
        marginBottom: '20px',
    }
}));

const Loading = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.init_box}>
                <div className={classes.init_box_main_title}>
                    Berea Movement is to Return to the Word!
                </div>
                <div>
                    “These were more fair-minded than those in Thessalonica, in that they received the word with all readiness, and searched the Scriptures daily to find out whether these things were so.” (Acts17:11)
                </div>
            </div>
        </>
    )
};
export default Loading;