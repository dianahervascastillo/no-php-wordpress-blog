import React, { Component } from 'react';
import axios from 'axios';
import PostsList from './components/PostsList';
import {getPosts} from './data/GetData';
import '@babel/polyfill';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount () {
    let postUrl = `${getPosts}`;

    axios.get(postUrl)
    .then((response) => {
      this.setState({
        posts: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    return(
      <main className="main" role='main'>
        <h1 className="title">Hello! this are just 3 posts, with a hardcoded category and type</h1>
        <div className='posts-list'>
          <PostsList postsToShow={this.state.posts} />
        </div>
      </main>
    )
  }
}