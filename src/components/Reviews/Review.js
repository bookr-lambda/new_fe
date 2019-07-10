import React from 'react';

function Reviews(props) {
    return (
        <div>
            <h4>{props.user_id}</h4>
            <p>{props.review}</p>
        </div>
    )
}

export default Reviews;