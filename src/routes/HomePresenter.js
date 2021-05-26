import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    feeds: {
        marginBottom: '90px',
    },
    feed: {
        height: '30vh',
        overflow: 'hidden',
        borderBottom: '1px solid #ccc',
    },
    feedImg: {
      width: '100%',
    },
    feedTitle: {
        fontSize: '16px',
        paddingTop:'10px',
        paddingLeft:'30px',
        paddingRight:'30px',
        fontWeight: 'bold',
    },
    feedDate: {
        opacity: '0.6',
        fontSize: '10px',
        paddingLeft:'30px',
        paddingRight:'30px',
        paddingBottom:'20px',
    },
    feedLink: {
        color: "black",
        textDecoration: 'none',
        "&:visited": {
            color: "black",
        },
    },
    loadingStyle: {
        padding: '20px',
    }
}));

export default ({ loading, nowFeeding }) => {
    const classes = useStyles();

    return(
    <div className={classes.feeds}>
        {loading ? (
            <div className={classes.loadingStyle}>loading...</div>
        ) : (
            <>
                <div>
                {nowFeeding.map(feed => (
                    <>
                    <Link to={`/detail/${feed.id}`} className={classes.feedLink}>
                    <div className={classes.feed} to={`/detail/${feed.id}`}>
                        <img className={classes.feedImg} src={feed.jetpack_featured_media_url} />
                    </div>
                    <div className={classes.feedTitle} dangerouslySetInnerHTML={ {__html: feed.title.rendered} }></div>
                    <div className={classes.feedDate}>{feed.date}</div>
                    </Link>
                    </>
                ))}
                </div>
            </>
        )}
    </div>
    )
};