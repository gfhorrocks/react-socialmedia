import React from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Wrapper from '../Wrapper';
import './PostList.css';

export default class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        console.log(res.data);
        this.setState({ posts });
      })
  }
                                                        //Looping through the posts with map.  Displaying Title,UserId and Body of result. 
  render() {
    return (
      <div>
        {this.state.posts.map(posts =>
          <Wrapper key={posts.id}>
            <Row>
              <Col >
                <div className="postTitle">{posts.title}</div>                      
                <div className="postAuthor">Posted by User {posts.userId}</div>
                <div className="postBody">{posts.body}</div>
              </Col>
            </Row>
          </Wrapper>
        )}
      </div>
    )
  }
}

