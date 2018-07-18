import React, {Component} from 'react'
import ModuleList from '../module/ModuleList3'
import CourseService from '../../services/CourseService'

class CourseEditor extends Component {
  constructor(props) {
    super(props);
    this.courseService = CourseService.instance;
    this.state = {
      course: {
        modules: [{
          lessons: [{
            topics: [{

            }]
          }]
        }]
      }
    }
  }
  componentDidMount() {
    this.courseService.findCourseById(this.props.match.params.courseId)
      .then(course => {
        this.setState({course: course})
      });
  }
  render() {
    return (
      <div>
        <h1>Course Editor {this.props.match.params.courseId}</h1>
        <ModuleList course={this.state.course}/>
      </div>
    )
  }
};

export default CourseEditor;