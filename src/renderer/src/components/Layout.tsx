import { Outlet } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Layout(): JSX.Element {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  )
}

export default Layout
