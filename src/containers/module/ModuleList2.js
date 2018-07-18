import React from 'react'
import {Link, Route} from 'react-router-dom'
import LessonTabs from '../lesson/LessonTabs'

const ModuleList = ({course}) => {
  let selectedModule = 0;
  return(
    <div className="row">
      <div className="col-4">
      <h2>Module List</h2>
      <ul className="list-group">
        {
          course.modules.map(
            (module, i) => {
              let to = "/course/"+course.id+"/module/"+module.id;
              return (
                <li key={i}
                    onClick={() => {
                      console.log(i);
                      selectedModule = i;
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
        <h2>Lessons {course.modules[0].lessons[0].title}</h2>
        <ul className="nav nav-tabs">
        {
          course.modules[selectedModule].lessons.map(
            (lesson, i) =>
              <li className="nav-item" key={i}>
                <a className="nav-link">{lesson.title}</a>
              </li>
          )
        }
        </ul>
      </div>
    </div>
  )
};

export default ModuleList;