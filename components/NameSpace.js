import React, { Component } from 'react'
import { Cloud } from 'react-feather';


export default class NameSpace extends Component {
  render() {
    const { name, selfLink, uid, creationTimestamp } = this.props.details;
    return (
          <li>
            <Cloud strokeWidth={1} size={16} />
            <p>{name}</p>
            <p>{selfLink}</p>
            <p>{uid}</p>
            <p>{creationTimestamp}</p>
          </li>
    )
  }
}
