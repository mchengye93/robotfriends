import React from 'react';
import {robots} from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchField:''

        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));

    }
    handleSearch(e) {
        console.log(e.target.value);
        this.setState({
            searchField: e.target.value
        });


    }
    render() {
        let {robots,searchField} = this.state;

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
                <SearchBox handleSearch= {this.handleSearch}/>
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

export default App;