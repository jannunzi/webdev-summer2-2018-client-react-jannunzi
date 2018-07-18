import React from 'react'

const ModuleListItemStateless = ({title}) =>
  <li className="list-group-item">
    {title} (Stateless)
    <span className="pull-right">
        <i className="fa fa-trash"></i>
        <i className="fa fa-pencil"></i>
      </span>
  </li>

export default ModuleListItemStateless;