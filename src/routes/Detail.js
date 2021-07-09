import React, { useEffect, useState } from "react";
import { bereaApi } from "api";
import DetailPresenter from "./DetailPresenter";

const Detail = ({ match }) => {

    const [feed, setFeed] = useState({
        loading: true,
        Feeding: null
    });

    const getData = async() => {
        const Feeding = await bereaApi.feed(match.params.id);
        setFeed({
            loading: false,
            Feeding
        });
    };
    
    useEffect(() => getData(), []);

    return <DetailPresenter {...feed} />;
};
export default Detail;