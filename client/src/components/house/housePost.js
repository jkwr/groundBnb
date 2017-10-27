import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import HouseModel from '../models/House'
import styles from './housePost.css';

function HousePost(props) {
	 render(){
    HouseModel.all().then( (res) => {
      console.log(res);
    })

  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/houses/${this.props.house.slug}-${this.props.house.cuid}`} >
          {props.post.title}
        </Link>
      </h3>

    </div>
  );
}

HousePost().propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
		bedrooms:PropTypes.number.isRequired,
		bathrooms:PropTypes.number.isRequired,
		cost:PropTypes.number.isRequired,
		location:PropTypes.string.isRequired,
		user_id:PropTypes.string.isRequired,
		photos:PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default HousePost();
