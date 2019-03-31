import React from 'react';
import { Card } from 'vanilla-framework-react';

//this is not finished, just trying the actual react components in vanilla
const PostCardReact = (props) => {
  console.log(props.post.id)
  return(
    <Card highlighted header="Cloud and server">
      <div className='p-card__content'>
        <img src={props.post._embedded['wp:featuredmedia'][0].source_url} alt=""/>
        <h2>{props.post.title.rendered}</h2>
        <p>
          By <a href={props.post._embedded.author[0].link} target='_blank' aria-label='Opens link to author profile in a new tab or window'>{props.post._embedded.author[0].name}</a> on {props.post.date}
        </p>
        <p className='p-card__footer'>{props.post.type}</p>
      </div>
    </Card>
  )
};

export default PostCardReact;

