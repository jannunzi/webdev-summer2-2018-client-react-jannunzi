import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import HelloWorld from './hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills2'
import CourseList from './containers/courses/CourseList'
import ES6 from './containers/es6/es6'
import CourseEditor from './containers/courses/CourseEditor'
import WidgetListComponent from './containers/widgets/WidgetListComponent'
import {widgetReducer} from "./reducers/widgetReducer";
import WidgetListContainer from "./containers/widgets/WidgetListContainer";

const ModuleListItemStateless = ({title}) =>
  <li className="list-group-item">
    {title} (Stateless)
    <span className="pull-right">
        <i className="fa fa-trash"></i>
        <i className="fa fa-pencil"></i>
      </span>
  </li>

class ModuleListItem extends React.Component {
  render() {
    return(
      <li className="list-group-item">
        {this.props.title}
        <span className="pull-right">
          <i className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
        </span>
      </li>
    )
  }
}

class ModuleList extends React.Component {
  constructor() {
    super();
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
  }
  renderModuleList() {
    let modules = this.state.modules.map( (module, i) =>
      <ModuleListItemStateless
        key={i}
        title={module.title}/>
    );
    return modules
  }
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
        <h1>Module List</h1>
        <h2>{this.state.title}</h2>

        <input className="form-control"
               onChange={this.titleChanged}
               placeholder="title"/>
        <button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>

        <p>{this.state.title}</p>
        <ul className="list-group">
          {
            this.renderModuleList()
          }
        </ul>
      </div>
    )
  }
}


class CourseCard extends React.Component {
  render() {
    return (

      <div className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Card text.</p>
          <a href="#" className="btn btn-primary">More...</a>
        </div></div>

    )
  }
}


class WhiteBoard extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Whiteboard</h1>

        <CourseList/>

        {/*<TopicPills/>*/}

        {/*<LessonTabs/>*/}

        {/*<ModuleList/>*/}

      </div>
    )
  }
}


const Page1 = () =>
  <h2>Page 1</h2>

const Page2 = () => {
  return(<h2>Page 2</h2>)
};


const PageParam = ({match}) => {
  return(
    <h2>PageParam {match.params.something}
    </h2>
  )
};

const HelloWorld = () => {
  return(<h1>Hello World!</h1>);
};

let store = createStore(widgetReducer)

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <div className="container-fluid">
            <Link to="/whiteboard">WhiteBoard</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/page1">Page 1</Link> |
            <Link to="/page2">Page 2</Link> |
            <Link to="/es6">ES6</Link> |
            <Link to="/widgets">Widgets</Link>
            <Route path='/widgets' component={WidgetListContainer}/>
            <Route path='/whiteboard' component={WhiteBoard}/>
            <Route path='/page1' component={Page1}/>
            <Route path='/page2' component={Page2}/>
            <Route path='/hello' component={HelloWorld}/>
            <Route path='/pageParam/:something' component={PageParam}/>
            <Route path='/es6' component={ES6}/>
            <Route path='/course/:courseId' component={CourseEditor}/>
          </div>
        </Router>
      </Provider>
    );
  }}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);