import React from 'react'
// Destructuring with  {} helps create a new variable for React.Component => Component

// class based component
const Header = (props) => {

    return (
        <header>
            <div className='logo' >BATTLELIST</div>
            <input 
                type='text'
                onChange={props.keywords}/>

        </header>
    )
}





export default Header;