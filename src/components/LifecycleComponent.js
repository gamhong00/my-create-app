import React, { Component } from 'react';

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor called');
        this.state = {
            message: 'Hello'
        };
    }

    componentDidMount() {
        console.log('Component did mount');
        setTimeout(() => {
            this.setState({ message: 'Hello from componentDidMount' });
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
        if (prevState.message !== this.state.message) {
            console.log('State message changed');
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        console.log('Render called');
        return (
            <div>
                <h2>Component Lifecycle Example</h2>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default LifecycleComponent;
