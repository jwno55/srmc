import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { ErrorOutline } from "@material-ui/icons";
import Skeleton from "react-loading-skeleton";
import { LinearProgress } from "@material-ui/core";

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
        width: '100%'
    },
    feedTitle: {
        fontSize: '16px',
        paddingTop: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
        fontWeight: 'bold',
    },
    feedDate: {
        opacity: '0.6',
        fontSize: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingBottom: '20px',
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

const HomePresenter = ({ loading, nowFeeding }) => {
    const classes = useStyles();

    return <div className={classes.feeds}>
                {
                    loading ?
                    <LinearProgress />
                    : nowFeeding == null ?
                    <div className={classes.loadingStyle}>
                        <ErrorOutline fontSize="large" />
                        <span>Sorry, There was an error retrieving the feeds. Could you try again?</span>
                    </div>
                    : <>
                        {nowFeeding.map(feed =>
                            <Link key={feed.id} to={`/detail/${feed.id}`} className={classes.feedLink}>
                                <div className={classes.feed} to={`/detail/${feed.id}`}>
                                    <img className={classes.feedImg} src={feed.jetpack_featured_media_url} alt="" />
                                </div>
                                <div className={classes.feedTitle} > <span>{feed.title.rendered}</span></div>
                                <div className={classes.feedDate}>{feed.date}</div>
                            </Link>
                        )}
                    </>
                }
            </div>
};
export default HomePresenter;