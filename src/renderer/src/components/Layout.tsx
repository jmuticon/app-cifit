import { Outlet } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Layout(): JSX.Element {
  return (
    <div className="main-container overflow-x-hidden">
      <Outlet />
    </div>
  )
}

export default Layout
