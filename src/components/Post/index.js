import React from 'react'
import Clear from '../Clear'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

export default function Post(props) {
  return(
    <div className="post-outer">
      <div className="article-holder">
        <article className="post hentry">
          <div className="post-body entry-content">
            <h2 className="post-title entry-title">
              <a href="#">Demo post with formatted elements and comments.</a>
            </h2>
            <p className="post-date-author">
              <FontAwesomeIcon icon={faCalendar} /> &nbsp;&nbsp; {props.hour}
            </p>
            <hr/>
            <div>
              <img src="https://3.bp.blogspot.com/-xUiI8Gt_QyM/VmgGaFQcp3I/AAAAAAAAIrY/pmC0lS28CWI/s1600/btemplates-aquarium-by-francisco-oliveros.jpg" alt="img" className="pbtthumbimg" />
              <div style={{lineHeight: "1.6"}}>
                <p>
                  Aquarium. Photo by Francisco.Rareti is the
                  template number 4665 in BTemplates, where a
                  total of 51 270 264 templates has been
                  downloaded so far since 2008. This template
                  was created by Widiyanata and...
                </p>
              </div>
              <div style={{
                float: "left",
                paddingRight: "10px",
                marginTop: "10px"
              }}>
                <a href="#" className="morer">Read More</a>
              </div>
              <Clear />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}