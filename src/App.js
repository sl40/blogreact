import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import BlogMenu from './components/menu/menu'
import Terms from './components/markdown/SLmarkdown'
import {Row,Col,Layout} from 'antd';
import {  BrowserRouter as Router,Link  ,Route} from 'react-router-dom';
class SLicon extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title1: 'WELCOME TO 40',
            title2: props.value.title2
        }
    }
    render() {
        return (
            <div id="App">
                <div id="sk-icon">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 style={{textAlign: 'center'}}>{this.state.title1}</h1>
                    <h3 style={{textAlign: 'center'}}>{this.state.title2}</h3>
                    <div id='menu-host'>
                        <li className='menu-li'>
                            <Link to={'/newWord'} className='menu-a'> NEW WORD|新世界</Link>
                        </li>
                        <li className='menu-li'>
                            <Link to={'/source'} className='menu-a'> SOURCE|资源</Link>
                        </li>
                        <li className='menu-li'>
                            <Link to={'code'} className='menu-a'> CODE|代码</Link>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}


class App extends Component {//props 传递的是 {value:{title2:'对每个有趣的灵魂说一句幸会'}}
    render(){
        return(
            <Router >
                <Layout  style={{ height: '100%', backgroundColor: "transparent" }}>
                    <Route path="/newWord" render={() => <SLicon value={{title2: "newWord"}}/>}/>
                    <Route path="/source" render={() => <Terms/>}/>
                    <Route path="/code" render={() => <SLicon value={{title2: "code"}}/>}/>
                    <Route path="/" exact render={() => <SLicon value={{title2: '对每个有趣的灵魂说一句幸会说一句幸会'}}/>}/>
                </Layout>
            </Router>
        )
    }

}
export default App;
