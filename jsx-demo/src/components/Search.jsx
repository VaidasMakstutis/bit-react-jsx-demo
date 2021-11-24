import React from "react";

class Search extends React.Component {

constructor(props) {
    super(props);
}

    render (){
        return (
            <input
                value = {this.props.val}
                className = "form-control"
                onChange = {this.props.onSearch}
                placeholder = "Search posts"
            />
        )
    }
}

export default Search;