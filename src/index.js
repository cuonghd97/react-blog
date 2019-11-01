import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap'
import SidebarLeft from './components/SidebarLeft'


const App = () => {
  return (
		<div className="container-fluid">
			<Row>
				<SidebarLeft />
			</Row>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
