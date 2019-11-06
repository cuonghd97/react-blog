import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import './style.scss'

export default function SideBarLeft(props) {
	return (
		<Col sm={12} md={3} lg={3} id="sidebar">
			<div className="header-section section" id="header-section">
				<div className="widget Header" id="Header1">
					<div id="inner-header">
						<div className="titlewrapper">
							<h1 className="site-title">
								<a href="#" className="logo">
									Cuong
								</a>
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="sosial">
				<a href=""><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
				<a href=""><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
				<a href=""><FontAwesomeIcon icon={faGithub} size="2x" /></a>
			</div>
			<div className="navbar-collapse">
				<div>
					<div className="top-menutop section" id="top-menutop">
						<div className="widget Pagelist" id="Pagelist8">
							<div className="widget-content">
								<ul className="menu">
									<li><Link to="#">Home</Link></li>
									<li><Link to="#">Home</Link></li>
									<li><Link to="#">Home</Link></li>
									<li><Link to="#">Home</Link></li>
									<li><Link to="#">Home</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Col>
	)
}