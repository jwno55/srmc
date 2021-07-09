import React, { useEffect, useState } from "react";
import { bereaApi } from "api";
import HomePresenter from "./HomePresenter";

const Home = () => {
    const [feeds, setFeeds] = useState({
        loading: true,
        nowFeeding: null,
    });

    useEffect(() => {
        bereaApi.nowFeeding().then(nowFeeding => setFeeds({
            loading: false,
            nowFeeding
        }));
    }, []);

    return <HomePresenter {...feeds} />;
};
export default Home;