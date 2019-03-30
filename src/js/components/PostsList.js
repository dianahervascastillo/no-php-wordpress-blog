import React, { Component, Fragment } from 'react';
import PostCard from './Postcard'

class PostsList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log('PROPS', this.props.postsToShow)
    return(
      <Fragment>
        {this.props.postsToShow.map( post =>(
          <PostCard key={post.id} post={post}/>
          )
        )}
      </Fragment>
    )
  }
}


export default PostsList;