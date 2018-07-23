import {connect} from 'react-redux'
import WidgetListComponent from './WidgetListComponent'

const stateToPropertyMapper = state => (
  {
    widgets: state.widgets
  }
)


const WidgetListContainer =
  connect(stateToPropertyMapper)
  (WidgetListComponent)

export default WidgetListContainer