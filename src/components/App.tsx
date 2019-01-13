import * as React from 'react'

import PageInterface from '../PageInterface'

class App extends React.Component<PageInterface, {}> {
    public render() {
        return (
            <div>
                <h1>
                    Welcome to {this.props.stack[0]} using {this.props.stack[1]}
                </h1>
            </div>
        )
    }
}

export default App
