import React from 'react'
import CourseService from "../../services/CourseService";
import ModuleList from "../modules/ModuleList"

export default class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.service = CourseService.instance
    this.state = {
      course: {
        modules: [{
          title: '',
          lessons: [{
            title: '',
            topics: [{
              title: ''
            }]
          }]
        }]
      }
    }
  }
  componentDidMount() {
    this.service.findCourseById(this.props.match.params.courseId)
      .then(course => this.setState({course: course}));
  }
  render() {
    return(
      <div>
        <h2>Course Editor {this.props.match.params.courseId}</h2>
        <h3>{this.state.course.title}</h3>
        <ModuleList course={this.state.course}/>
      </div>
    )
  }
}