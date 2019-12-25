import React from 'react'
import { Col } from 'react-bootstrap'
import '../style.scss'

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Col sm={12} md={{ span: 9, offset: 3 }} lg={{ span: 6, offset: 3 }} className="col-content">
        <div>
          <div className="widget">
            <div className="hfeed">
              <h1>About</h1>
            </div>
          </div>
        </div>
      </Col>
    )
  }
}

export default About