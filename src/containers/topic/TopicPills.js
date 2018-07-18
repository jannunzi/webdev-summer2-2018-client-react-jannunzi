import React, {Component} from 'react'

class TopicPills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: 0
    }
  }
  componentDidMount() {
    this.setState({
      selectedTopic: 0
    })
  }
  componentWillReceiveProps(props) {
    this.setState({
      selectedTopic: 0
    })
  }
  selectTopic = topicIndex =>
    this.setState({selectedTopic: topicIndex});

  render() {
    return(
      <div>
        <h2>Topics {this.props.topics.length}</h2>
        <ul className="nav nav-pills">
          {
            this.props.topics.map((topic, i) => {
              let active = i === this.state.selectedTopic ? 'active' : '';
              return(
                <li className="nav-item"
                    onClick={() => this.selectTopic(i)}
                    key={i}>
                  <a className={`nav-link ${active}`}>{topic.title}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TopicPills;