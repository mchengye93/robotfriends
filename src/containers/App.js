import React from 'react';
import {connect} from 'react-redux';
// import {robots} from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
    
}
class App extends React.Component {
   
    componentDidMount() {
        this.props.onRequestRobots();
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({robots:users}));

    }

    render() {
       
        const {searchField, onSearchChange, robots , isPending} = this.props;

        let filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
        })

        if(isPending) {
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