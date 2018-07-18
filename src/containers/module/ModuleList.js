import React from 'react'
import ModuleListItemStateless from './ModuleListItemStateless'
import ModuleListItem from './ModuleListItem'

class ModuleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'dummy module title',
      modules: [
        {title: 'Module 1'},
        {title: 'Module 2'},
        {title: 'Module 3'},
        {title: 'Module 4'}
      ]
    };
    console.log("THIS");
    console.log(this);
    // this.titleChanged = this.titleChanged.bind(this);
  }
  titleChanged = (event) => {
    console.log("THAT");
    console.log(this);
    if(event) {
      this.setState({title: event.target.value});
    }
  };
  // renderModuleList() {
  //   let modules = this.props.course.modules.map( (module, i) =>
  //     <ModuleListItemStateless
  //       key={i}
  //       title={module.title}/>
  //   );
  //   return modules
  // }
  createModule = () => {
    console.log(this.state.title);
    console.log(this.state.modules);
    var module = {title: this.state.title};
    this.state.modules.push(module);
    this.setState({"modules": this.state.modules})
  };

  render() {
    return (
      <div>
        <h1>Module List {this.props.course.title}</h1>
        <h2>{this.state.title}</h2>

        <input className="form-control"
               onChange={this.titleChanged}
               placeholder="title"/>
        <button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>

        <p>{this.state.title}</p>
        <ul className="list-group">
          {this.props.course.title}
        </ul>
      </div>
    )
  }
}

export default ModuleList