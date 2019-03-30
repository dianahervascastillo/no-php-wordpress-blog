import React from 'react';
import { Card } from 'vanilla-framework-react';

const PostCard = (props) => {
  console.log(props.post.id)
  return(
    <Card highlighted header="titleofthething" title={props.post.title.rendered}>
      <p>
        By <a href=''>{props.post.author}</a> on {props.post.date}
      </p>
      <p className='p-card__footer'>{props.post.category}</p>
    </Card>
  )
};

export default PostCard;

