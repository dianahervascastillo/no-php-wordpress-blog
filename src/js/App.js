import React, { Component, Fragment } from 'react';
import PostsList from './components/PostsList';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }


  componentDidMount () {
    return fetch('https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?per_page=3&page=1&_embed=True')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          posts: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render(){
    console.log(this.state.posts)
    return(
      <Fragment>
        <header className='header'>App Header</header>
        <main className="main" role='main'>
          <h1 className="title">Hello and Welcome, React-Redux-Sass Starter kit is successfully build and your kit is ready to use</h1>
          <div className='posts-list'>
            <PostsList postsToShow={this.state.posts} />
          </div>
        </main>
        <footer className="header">App Footer</footer>
      </Fragment>
    )
  }
}