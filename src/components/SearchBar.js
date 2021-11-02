import React from 'react';

class SearchBar extends React.Component {

    state = { keyword: ' ' };

    onInputChange = event => {
        this.setState({ keyword: event.target.value });
    }

    onKeywordSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.keyword);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onKeywordSubmit} className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                        <input
                            type="text"
                            value={this.state.keyword}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;