import React from 'react';
import GroupItem from './GroupItem.js'

const GroupList = () => {
    return (
        <div className="ui segment">
            <h3>All Public Groups</h3>
            
            <div className="ui list container">
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
            </div>
        </div>
    )
};

export default GroupList;