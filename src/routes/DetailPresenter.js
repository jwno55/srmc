import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    feed: {
        width: '100%',
        padding: '0px 20px 100px 20px',
        overflow: 'hidden',
    },
    content: {
        width: '100%',
    },
}));

const DetailPresenter = ({ loading, Feeding }) => {
    const classes = useStyles();

    const styleObj = {
        width: '100%',
    };

    return (
    <div className={classes.feed}>
        {loading ? 
        <LinearProgress />
        : Feeding == null ?
        <div className={classes.loadingStyle}>
            <ErrorOutline fontSize="large" />
            <span>Sorry, There was an error retrieving this feed. Could you try again?</span>
        </div>
        : (
            <>
                <div className={classes.content}>
                    <div dangerouslySetInnerHTML={ {__html: Feeding.content.rendered} } style={styleObj}></div>
                </div>
            </>
        )}
    </div>
    )
};
export default DetailPresenter;