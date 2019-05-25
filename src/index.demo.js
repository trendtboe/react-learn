import React from 'react'  // Import module from node_modules (because path is not defined)
import ReactDOM from 'react-dom' 

const App = () =>{
    // Can gets react to interpret html
    // Must be returned in ONE element
    return (
        <div className = 'newElement'>
            <h1>Hello world!!!</h1>
            <div>Hey</div>
        </div>
    )

    // or can build an element 
    // with an object for attributes
    // and argument for text content
    //return React.createElement('h1',{className:'title'}, 'Hello world!')

    // This can be used to insert additional elements manually
    //return React.createElement('h1',{className:'title'}, React.createElement('div'))

}

// Need tags to specify it is a component
// Then use vanilla JS to specify the target component
ReactDOM.render(<App/>, document.querySelector('#root'))  