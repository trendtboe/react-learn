import React, {Component} from 'react'  // Import module from node_modules (because path is not defined)
import ReactDOM from 'react-dom'


import JSON from './db.json'
// COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'


class App extends Component {

    state = {
        news: JSON
    }

    render() {
        
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news} donkey="me">
                    <h3>The news articles...</h3>
                
                </NewsList>
            </div>
        )
    }

}


ReactDOM.render(<App/>, document.querySelector('#root'))  