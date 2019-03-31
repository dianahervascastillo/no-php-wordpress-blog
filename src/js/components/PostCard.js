import React from 'react';
import Moment from 'react-moment'

const PostCard = (props) => {
  console.log(props.post.id)
  return(
    <div className='p-card p-card--highlighted p-card--post'>
      <p className='p-card--post__category'>Cloud and Server</p>
      <div className='p-card__content'>
        <a href={props.post.link} target='_blank' aria-label='Opens link to post in a new tab or window'>
          <div className='p-card--post__img' style={{ backgroundImage: `url(${props.post._embedded['wp:featuredmedia'][0].source_url})`}} role='image' />
        </a>
        <a href={props.post.link} target='_blank' aria-label='Opens link to post in a new tab or window'>
          <h2>{props.post.title.rendered}</h2>
        </a>
        <p>
          <em>By <a href={props.post._embedded.author[0].link} target='_blank' aria-label='Opens link to author profile in a new tab or window'>{props.post._embedded.author[0].name}</a> on <Moment format="DD MMMM YYYY">{props.post.date}</Moment> </em>
        </p>
      </div>
      <div className='p-card--post__type'>Article</div>
    </div>
  )
};

export default PostCard;

