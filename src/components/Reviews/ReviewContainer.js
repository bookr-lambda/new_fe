import React from 'react';
import Review from './Review';

function ReviewContainer(props) {
    return (
        <div>
            <Review user_id={props.user_id} review={props.review} />
            {/* {props.reviews.map((index) => {
                return <Review key={index} user_id={props.user_id} review={props.review} />
            })} */}
        </div>
    )
}
export default ReviewContainer;