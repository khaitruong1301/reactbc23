import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {


  render() {

    if(!localStorage.getItem('username')){
        alert('Bạn chưa đăng nhập nên không thể vào trang!');
        // this.history.push('')
        return <Redirect to="/login" />
    }

    return (
      <div>Profile</div>
    )
  }
}
