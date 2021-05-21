import React, { useEffect, useState } from "react";
import { bereaApi } from "api";
import HomePresenter from "./HomePresenter";

export default () => {
    const [feeds, setFeeds] = useState({
        loading: true,
        nowFeeding: [],
        nowFeedingError: null
    });

    const getData = async() => {
        const [nowFeeding, nowFeedingError] = await bereaApi.nowFeeding();
        setFeeds({
            loading: false,
            nowFeeding,
            nowFeedingError
        });
    };

    console.log(feeds);
    
    useEffect(() =>{
        getData();
    }, []);

    return <HomePresenter {...feeds} />;
};