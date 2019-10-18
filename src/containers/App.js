import React from 'react';
import {connect} from 'react-redux';
// import {robots} from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


import {setSearchField} from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
    
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots:[],

        }
        
    }
    componentDidMount() {
   
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));

    }

    render() {
        let {robots} = this.state;
        const {searchField, onSearchChange} = this.props;

        let filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
        })

        if(!robots.length ) {
            return (
                <div className='App tc'>
                <h1>RoboFriends</h1>
                <p>Loading....</p>
                </div>
            )
        } else {
            return (
                <div className='App tc'>
                <h1>RoboFriends</h1>
                <SearchBox handleSearch= {onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots= {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                </div>
            )

        }
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);