import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Loading from "components/Loading";

const useStyles = makeStyles((theme) => ({
    feeds: {
        marginBottom: '90px',
    },
    feed: {
        overflow: 'hidden',
        borderBottom: '1px solid #ccc',
    },
    feedImg: {
        width: '100%',
        position: 'relative',
        zIndex:-1,
        verticalAlign: 'bottom',
    },
    feedTitleBox: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'15px',
        paddingRight:'15px',
        minHeight: '13vh',
    },
    feedTitle: {
        fontSize: '0.9rem',
        paddingTop:'10px',
        paddingBottom:'5px',
        paddingLeft:'15px',
        fontWeight: 'bold',
    },
    feedDate: {
        opacity: '0.6',
        fontSize: '0.7rem',
        paddingLeft:'15px',
        paddingBottom:'20px',
    },
    feedLink: {
        color: "black",
        textDecoration: 'none',
        "&:visited": {
            color: "black",
        },
    },
}));

export default ({ loading, nowFeeding, userObj }) => {

    const classes = useStyles();

    return(
    <div className={classes.feeds}>
        {loading ? (
            <Loading />
        ) : (
            <>
                {nowFeeding.map((feed, i) => (
                    <>
                    <Link to={`/detail/${feed.id}`} className={classes.feedLink} key={i}>
                        <div className={classes.feed} to={`/detail/${feed.id}`}>
                            <img className={classes.feedImg} src={feed.jetpack_featured_media_url} />
                        </div>
                        <div className={classes.feedTitleBox}>
                            <Avatar alt="categorise images" src={`/images/${feed.categories[0]}.png`} />
                            <div>
                                <div className={classes.feedTitle} dangerouslySetInnerHTML={ {__html: feed.title.rendered} }></div>
                                <div className={classes.feedDate}>{feed.date}</div>
                            </div>
                        </div>
                    </Link>
                    </>
                ))}
            </>
        )}
    </div>
    )
};