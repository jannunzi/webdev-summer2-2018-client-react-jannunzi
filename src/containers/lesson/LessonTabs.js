import React, {Component} from 'react'
import TopicPills from '../topic/TopicPills'

class LessonTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLesson: 0
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      selectedLesson: 0
    })
  }
  selectLesson = (lessonIndex) => {
    this.setState({
      selectedLesson: lessonIndex
    });
  };
  render() {
    return(
      <div>
        <h2>Lessons {this.props.lessons[0].title}</h2>
        <ul className="nav nav-tabs">
          {
            this.props.lessons.map(
              (lesson, i) => {
                let active = this.state.selectedLesson === i ? 'active' : '';
                return (<li className={"nav-item"}
                    onClick={() => {
                      this.selectLesson(i)
                    }}
                    key={i}>
                  <a className={"nav-link " + active}>
                    {lesson.title}
                  </a>
                </li>)
              }
            )
          }
        </ul>
        <TopicPills topics={this.props.lessons[this.state.selectedLesson].topics}/>
      </div>
    )
  }
};

export default LessonTabs;