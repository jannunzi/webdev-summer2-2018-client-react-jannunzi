import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import HelloWorld from './hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import CourseList from './containers/course/CourseList'
import ES6 from './containers/es6/es6'
import CourseEditor from './containers/course/CourseEditor'

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

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="container-fluid">
          <Link to="/whiteboard">WhiteBoard</Link> |
          <Link to="/hello">Hello</Link> |
          <Link to="/page1">Page 1</Link> |
          <Link to="/page2">Page 2</Link> |
          <Link to="/es6">ES6</Link>
          <Route path='/whiteboard' component={WhiteBoard}/>
          <Route path='/page1' component={Page1}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/hello' component={HelloWorld}/>
          <Route path='/pageParam/:something' component={PageParam}/>
          <Route path='/es6' component={ES6}/>
          <Route path='/course/:courseId' component={CourseEditor}/>

        </div>
      </Router>
    );
  }}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);