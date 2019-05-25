import React,{ Component } from 'react'
// Destructuring with  {} helps create a new variable for React.Component => Component

// class based component
class Header extends Component {

    state = {
        keywords: ''
    }

    inputChangeHandler = (event) => {  // arrow function lets us skip bind(this)
        // console.log(event.target.value)
        this.setState({
            keywords: event.target.value
        })
    }

    render(){
        return (
            <header>
                <div className='logo' >BATTLELIST</div>
                <input type='text' onChange={this.inputChangeHandler}/>

            </header>
        )
    }

}



export default Header;