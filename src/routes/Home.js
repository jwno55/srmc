import React, { useEffect, useState } from "react";
import { bereaApi } from "api";
import HomePresenter from "./HomePresenter";

export default ( {userObj} ) => {

    const [feeds, setFeeds] = useState({
        loading: true,
        nowFeeding: [],
        nowFeedingError: null,
        userObj: []
    });

    const getData = async() => {
        const [nowFeeding, nowFeedingError] = await bereaApi.nowFeeding();
        setFeeds({
            loading: false,
            nowFeeding,
            nowFeedingError,
            userObj: userObj
        });
    };

    //console.log(feeds);
    
    useEffect(() =>{
        getData();
    }, []);

    return <HomePresenter {...feeds} />;
};