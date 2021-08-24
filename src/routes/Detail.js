import React, { useEffect, useState } from "react";
import { bereaApi } from "api";
import DetailPresenter from "./DetailPresenter";

export default ({ match }) => {

    const [feed, setFeed] = useState({
        loading: true,
        Feeding: [],
        FeedingError: null
    });

    const getData = async() => {
        const [Feeding, FeedingError] = await bereaApi.feed(match.params.id);
        setFeed({
            loading: false,
            Feeding,
            FeedingError
        });
    };

    useEffect(() =>{
        getData();
    }, []);

    return <DetailPresenter {...feed} />;
};