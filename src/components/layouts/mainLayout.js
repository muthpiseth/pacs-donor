import React, { Fragment } from 'react'
import Sidebar from '../sidebars/sidebar'
import Contents from '../../pages/contents'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <Fragment>
        <Sidebar content={<Contents contents={<Outlet />}/>} />
    </Fragment>
  )
}

export default MainLayout