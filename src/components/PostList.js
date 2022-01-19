import React from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPostList(){
        return this.props.posts.map((post)=>{
            return (
                <div className="ui raised link card" key={post.id}>
                    <div className="content">
                        <div className="header">{post.title}</div>
                        <div className="meta">
                        <span className="category">{post.id}</span>
                        </div>
                        <div className="description">
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="right floated author">
                            <img className="ui avatar image" src="/images/avatar/small/matt.jpg"></img> Matt
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>{this.renderPostList()}</div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList);