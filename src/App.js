import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style';
import './App.less';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Create React Project with Ant Design and Less Support</h1>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default App;