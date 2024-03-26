import { NavLink, Outlet } from "react-router-dom";

function RootLayouts() {

  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="create">Create</NavLink>
          <NavLink to="archive">Archive</NavLink>
          <NavLink to="learn">Learn</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )

}

export default RootLayouts;