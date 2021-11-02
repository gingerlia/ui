import React from 'react';

const GroupItem = () => {
    return (
        <div className="item">
            <img class="ui avatar image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
            <div class="content">
                <a class="header">Group Name</a>
                <div class="description">Some Group Description</div>
            </div>
        </div>
    );
}

export default GroupItem;

