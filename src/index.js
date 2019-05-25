import React, {Component} from 'react'  // Import module from node_modules (because path is not defined)
import ReactDOM from 'react-dom'


import JSON from './db.json'
// COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'


class App extends Component {

    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        })

        console.log(filtered)

        this.setState({
            filtered // this is the same as filtered = filtered
        })
    }

    render() {
        // you can create an alias to shorten lines/references
        let newsFiltered = this.state.filtered
        let newsWhole = this.state.news 
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={newsFiltered.length === 0 ? newsWhole:newsFiltered}>
                    <h3>The news articles...</h3>
                
                </NewsList>
            </div>
        )
    }

}


ReactDOM.render(<App/>, document.querySelector('#root'))  