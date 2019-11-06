import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap'
import SidebarLeft from './components/SidebarLeft'
import Content from './components/Content'


const App = () => {
  return (
		<BrowserRouter>
			<div className="container-fluid">
				<Row>
					<SidebarLeft />
					<Content />
				</Row>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
