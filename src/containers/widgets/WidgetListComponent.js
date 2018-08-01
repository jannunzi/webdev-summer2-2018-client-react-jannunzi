import React from 'react'
import {WidgetType1} from './WidgetType1'
import {WidgetType2} from './WidgetType2'
import {WidgetType3} from './WidgetType3'
import {HeadingWidget} from "./HeadingWidget"
import {ListWidget} from "./ListWidget";
import {YouTubeWidget} from "./YouTubeWIdget"

class WidgetListComponent extends React.Component {
  constructor(props) {
    super(props)
    let widgetTitle;
    let widgetType;
    this.props.loadAllWidgets()
    console.log('www');
  }
  // componentWillReceiveProps(newProps) {
  //   this.props.widgets = newProps.widgets;
  // }
  render() {
    console.log('qwe');
    return(
      <div>
        <button onClick={this.props.saveWidgets}
                className="btn btn-primary float-right">
          Save
        </button>
        <h1>Widget List ({this.props.widgets.length})</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <input ref={node => this.widgetTitle = node} className="form-control"/>
            <button onClick={() => {
              let widget = {
                title: this.widgetTitle.value,
                id: (new Date()).getTime(),
                widgetType: this.widgetType.value
              };
              this.widgetTitle.value = '';
              this.props.createWidget(widget)
            }} className="btn btn-success">Add Widget
            </button>
            <select ref={node => this.widgetType = node} className="form-control">
              <option value="WT1">Widget Type 1</option>
              <option value="WT2">Widget Type 2</option>
              <option value="WT3">Widget Type 3</option>
              <option value="HEADING">Heading Widget</option>
            </select>
          </li>
          {this.props.widgets.map((widget, index) =>
            <li className="list-group-item"
                key={index}>
              {widget.title} ({widget.id}) - {widget.widgetType}

              <button onClick={() => this.props.up(widget.id)}
                      className="float-right btn btn-warning">
                Up
              </button>

              <button onClick={() => this.props.down(widget.id)}
                      className="float-right btn btn-warning">
                Down
              </button>

              <button className="float-right btn btn-danger"
                      onClick={() => this.props.deleteWidget(widget.id)}>
                Delete
              </button>
              <div>
                {widget.widgetType === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={this.props.updateWidget}/>}
                {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={this.props.updateWidget}/>}
                {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={this.props.updateWidget}/>}
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default WidgetListComponent