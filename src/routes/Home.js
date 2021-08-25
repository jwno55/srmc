import React, { useEffect, useState } from "react";
import { bereaApi } from "api";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Loading from "components/Loading";
import Avatar from '@material-ui/core/Avatar';

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
    moreBox:{
        display: 'flex',
        justifyContent: 'center',
        bottom: '70px',
        width: '100%',
        height:'70px',
        backgroundColor: '#f1f1f1',
    },
    moreButton:{
        flex:1,
        margin: '15px 20px',
        color: "white",
        backgroundColor: 'black',
        fontSize: '1.2rem',
        fontWeight: '700',
    },
}));

export default ( {userObj} ) => {

    const classes = useStyles();

    const [feeds, setFeeds] = useState({
        loading: true,
        nowFeeding: [],
        nowFeedingError: null,
        userObj: [],
        offset: 0,
    });

    const getData = async() => {
        const [nowFeeding, nowFeedingError] = await bereaApi.nowFeeding(feeds.offset);
        setFeeds({
            loading: false,
            nowFeeding: [...feeds.nowFeeding, ...nowFeeding],
            nowFeedingError,
            userObj: userObj,
            offset: feeds.offset+nowFeeding.length,
        });
    };

    useEffect(() =>{
        getData();
    }, []);

    return(
    <div className={classes.feeds}>
        {feeds.loading ? (
            <Loading />
        ) : (
            <>
                {feeds.nowFeeding.map((feed, i) => (
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
                <div className={classes.moreBox}>
                    <button className={classes.moreButton} onClick={()=>{
                        getData();
                    }}>see more</button>
                </div>
            </>
        )}
    </div>
    )
};