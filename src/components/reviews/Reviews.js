import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

  	const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
  	const listReviews = reviews.map((review, index) => {
  		return <Review key={index} store={this.props.store} review={review}/>
  	});

    return (
      <ul>
      	{listReviews}
      </ul>
    );
  }
};

export default Reviews;