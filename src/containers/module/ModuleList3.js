import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import LessonTabs from '../lesson/LessonTabs'

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModule: 0
    }
  }
  componentDidMount() {

  }
  selectModule = (moduleIndex) => {
    this.setState({
      selectedModule: moduleIndex
    })
  };
  render() {
    return(
      <div className="row">
        <div className="col-4">
          <h2>Module List</h2>
          <ul className="list-group">
            {
              this.props.course.modules.map(
                (module, i) => {
                  let to = "/course/"+this.props.course.id+"/module/"+module.id;
                  return (
                    <li key={i}
                        onClick={() => {
                          this.selectModule(i);
                        }}
                        className="list-group-item">
                      <Link to={to}>
                        {module.title}
                      </Link>
                    </li>
                  )
                }
              )
            }
          </ul>
        </div>
        {/*<Route path="/course/:courseId/module/:moduleId"*/}
        {/*component={LessonTabs}/>*/}
        <div className="col-8">
          <LessonTabs lessons={this.props.course.modules[this.state.selectedModule].lessons}/>
        </div>
      </div>
    )
  }
};
