import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap'
import SidebarLeft from './components/SidebarLeft'
import Content from './components/Content'
import About from './components/About'
import Post from './components/Post'


const App = () => {
  return (
		<BrowserRouter>
			<div className="container-fluid">
				<Row>
					<SidebarLeft />
					<Switch>
						<Route exact path={["/home", "/"]}>
							<Content />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/post/:id" component={Post}>
							
						</Route>
					</Switch>
				</Row>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
