import React, { Fragment } from 'react'
import Sidebar from '../sidebars/sidebar'
import Contents from '../../pages/contents'

function MainLayout() {
  return (
    <Fragment>
        <Sidebar content={<Contents />} />
    </Fragment>
  )
}

export default MainLayout