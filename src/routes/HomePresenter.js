import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    feeds: {
        marginBottom: '90px',
    },
    feed: {
        height: '250px',
        overflow: 'hidden',
        borderBottom: '1px solid #ccc',
    },
    feedImg: {
      width: '100%',
    },
    feedTitle: {
        marginTop:'10px',
        marginLeft:'10px',
        marginRight:'10px',
        fontWeight: 'bold',
    },
    feedDate: {
        opacity: '0.6',
        marginLeft:'10px',
        marginBottom:'20px',
    }
}));

export default ({ loading, nowFeeding }) => {
    const classes = useStyles();

    return(
    <div className={classes.feeds}>
        {loading ? (
            <div>loading</div>
        ) : (
            <>
                <div>
                {nowFeeding.map(feed => (
                    <>
                    <div className={classes.feed}>
                        <img className={classes.feedImg} src={feed.jetpack_featured_media_url} />
                    </div>
                    <div className={classes.feedTitle} dangerouslySetInnerHTML={ {__html: feed.title.rendered} }></div>
                    <div className={classes.feedDate}>{feed.date}</div>
                    </>
                ))}
                </div>
            </>
        )}
    </div>
    )
};