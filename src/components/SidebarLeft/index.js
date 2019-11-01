import React from 'react'
import { Col } from 'react-bootstrap'

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
		</Col>
	)
}