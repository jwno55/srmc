import React, { useState } from "react";

export default ({ loading, nowFeeding }) => {
    return(
    <div>
        {loading ? (
            <div>loading</div>
        ) : (
            <>
                <div>
                    <div dangerouslySetInnerHTML={ {__html: nowFeeding.content.rendered} }></div>
                </div>
            </>
        )}
    </div>
    )
};