import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {GlobalStyled} from './statics/iconfont/iconfont.js'
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header/index'
import store from './store';
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<div>
						<BrowserRouter>
							<div>
								<GlobalStyled/>
								<Header/>
								<Route path='/' exact component={Home}/>
								<Route path='/login' exact component={Login}/>
								<Route path='/write' exact component={Write}/>
								<Route path='/detail/:id' exact component={Detail}/>
							</div>
						</BrowserRouter>
					</div>
				</Provider>
			</div>
		);
	}
}
export default App;
