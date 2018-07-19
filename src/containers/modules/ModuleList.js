import React from 'react'
import LessonTabs from '../lessons/LessonTabs'

export default class ModuleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModuleIndex: 0
    }
  }
  selectModule = (index) => {
    console.log(index);
    this.setState({
      selectedModuleIndex: index
    });
  };
  render() {
    return (
      <div>
        <h3>Module List {this.props.course.modules[0].title}</h3>
        <ul>
          {this.props.course.modules.map(
            (module, i) => {
              return (
                <li onClick={() => this.selectModule(i)} key={i}>{module.title}</li>)
            })}
        </ul>
        <LessonTabs module={this.props.course.modules[this.state.selectedModuleIndex]}/>
      </div>
    )
  }
}