import React from 'react';

const PostItem = () => {
    return (
        <div class="item">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
            </div>
            <div class="content">
                <a class="header">Post Header</a>
                <div class="meta">
                    <span>Some Post Content</span>
                </div>
                <div class="description">
                    <p></p>
                </div>
                <div class="extra">
                    Additional Details
                </div>
            </div>
        </div>
    );
}

export default PostItem;