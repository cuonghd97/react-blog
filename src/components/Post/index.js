import React from 'react'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import '../style.scss'

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
  }

  render() {
    return (
      <Col sm={12} md={{ span: 9, offset: 3 }} lg={{ span: 6, offset: 3 }} className="col-content">
        <div>
          <div className="widget">
            <div className="hfeed">
              <div className="post-outer">
                <div className="article-holder">
                  <article className="post hentry">
                    <div className="post-body entry-content">
                      <h2 className="post-title entry-title">
                        <a href="#">Hello</a>
                      </h2>
                      <p className="post-date-author">
                        <FontAwesomeIcon icon={faCalendar} />
                        &nbsp;&nbsp; 19:03pm
                      </p>
                      <p style={{
                        
                      }}>

                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    )
  }
}

export default Post