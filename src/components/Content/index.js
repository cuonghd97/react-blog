import React from 'react'
import { Col } from 'react-bootstrap'
import Post from '../Post'
import Clear from '../Clear'

export default function Content(props) {
  return (
    <Col sm={12} md={{ span: 9, offset: 3 }} lg={{ span: 6, offset: 3 }} className="col-content" >
      <div>
        <div className="widget">
          <div className="hfeed">
            <Post hour="23:55" />
            <Post hour="00:14" />
          </div>
        </div>
      </div>
    </Col>
  )
}