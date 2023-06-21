import React, { Fragment } from 'react'
import Navbar from '../navbars/navbar'
import { Outlet } from 'react-router-dom'

function ViewLayout() {
  return (
    <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
  )
}

export default ViewLayout