import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    feed: {
        width: '100%',
        padding: '20px',
        overflow: 'hidden',
    },
    content: {
        width: '100%',
    },
}));

export default ({ loading, Feeding }) => {
    const classes = useStyles();

    const styleObj = {
        width: '100%',
    };

    return(
    <div className={classes.feed}>
        {loading ? (
            <div>loading</div>
        ) : (
            <>
                <div className={classes.content}>
                    <div dangerouslySetInnerHTML={ {__html: Feeding.content.rendered} } style={styleObj}></div>
                </div>
            </>
        )}
    </div>
    )
};