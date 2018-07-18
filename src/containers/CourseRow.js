import React from 'react';
class CourseRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.course.title}
        </td>
        <td>
          <button className="btn btn-danger"
                  onClick={() =>
                    this.props.deleteCourse(this.props.course.id)
                  }>
            Delete
          </button>
        </td>
      </tr>
    )
  }
}
export default CourseRow;
