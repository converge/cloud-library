import React, { Component } from 'react'
import Search from '../Search';
import Users from '../Users';
import './style.css'

export default class Admin extends Component {

  render() {
    return (
      <div>
        <Search />
        <h4 className="users">Users</h4>
        <Users />
      </div>
    )
  }

}