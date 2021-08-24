import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Loading from "components/Loading";

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

export default ({ loading, Feeding }) => {
    const classes = useStyles();

    const styleObj = {
        width: '100%',
    };

    return(
    <div className={classes.feed}>
        {loading ? (
            <Loading />
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