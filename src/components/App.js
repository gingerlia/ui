import React from 'react';
import GroupList from './GroupList.js';
import SearchBar from './SearchBar.js';
import TrendingPosts from './TendingPosts.js';

class App extends React.Component {

    onFormSubmit = keyword => {
        console.log(keyword);
    };

    render() {
        return (
            <div>
                <div class="ui menu">
                    <a class="active item">
                        Main Page
                    </a>
                    <a class="item">
                        Your Groups
                    </a>
                    <a class="item">
                        Messages
                    </a>
                    <div class="right menu">
                        <div class="item">
                            <div class="ui primary button">Sign Up</div>
                        </div>
                    </div>
                </div>
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onFormSubmit} />

                    <div className="ui grid">
                        <div className="eight wide column"><TrendingPosts /></div>
                        <div className="eight wide column"><GroupList /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;