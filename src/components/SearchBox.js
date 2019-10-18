import React from 'react';

const SearchBox = (props) => {
    return (
        <input type="text" placeholder="search robots" onChange={props.handleSearch}/>
    )
}
export default SearchBox;