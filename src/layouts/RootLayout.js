import { NavLink, Outlet } from "react-router-dom";
import '../styles/RootLayouts.css';
import { useAuthContext } from "../hook/useAuthContext";


function RootLayouts() {
  const { user } = useAuthContext()

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
          {!user && (<div>
            <NavLink className='navItems' to="login">Log in</NavLink>
            <NavLink className='navItems' to="signup">Sign up</NavLink>
          </div>)}
          {user && (<div> <span>{user.email}</span> <NavLink className='navItems' to="login">Logout</NavLink></div>)}




        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )

}

export default RootLayouts;