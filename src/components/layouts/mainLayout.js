import React, { Fragment } from 'react'
import Sidebar from '../sidebars/sidebar'
import Contents from '../../pages/contents/contents'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <Fragment>
      <Sidebar 
        maincontent={
        <Outlet>
          <Contents />
        </Outlet>}
      />
    </Fragment>
  )
}

export default MainLayout