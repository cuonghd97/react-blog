import React from 'react'
import { Col } from 'react-bootstrap'
import PostItem from '../PostItem'
import Clear from '../Clear'
import '../style.scss'

export default function Content(props) {
  const postsData = [
    { "id": "1", "title": 1, "hour": "23:55" },
    { "id": "2", "title": 2, "hour": "00:14" },
    { "id": "3", "title": 3, "hour": "11:38" }
  ]

  const listPosts = postsData.map((item, index) => {
    return (
      <div key={index}>
        <PostItem id={item.id} hour={item.hour} title={item.title}/>
        <Clear />
      </div>
    )
  })
  return (
    <Col sm={12} md={{ span: 9, offset: 3 }} lg={{ span: 6, offset: 3 }} className="col-content" >
      <div>
        <div className="widget">
          <div className="hfeed">
            {listPosts}
          </div>
        </div>
      </div>
    </Col>
  )
}