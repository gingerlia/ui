import React from 'react';
import PostItem from './PostItem';

const TrendingPosts = () => {
    return (
        <div className="ui segment">
            <h3>Trending Posts</h3>

            <div className="ui items">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
}

export default TrendingPosts;