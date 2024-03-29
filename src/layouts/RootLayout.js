import { NavLink, Outlet } from "react-router-dom";
import '../styles/RootLayouts.css';


function RootLayouts() {

  return (
    <div className="root-layout">
      <header>
        <nav>
          <div className="logo">Ballet Notation Project</div>
          <div className="separation"></div>
          <NavLink className='navItems' to="/">Home</NavLink>
          <NavLink className='navItems' to="learn">Learn</NavLink>
          <NavLink className='navItems' to="archive">Archive</NavLink>
          <NavLink className='navItems' to="create">Create</NavLink>
          <NavLink className='navItems' to="about">About</NavLink>
          <NavLink className='navItems' to="contact">Contact</NavLink>


        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )

}

export default RootLayouts;