import { Link, NavLink } from "react-router-dom";

export default function NavBar(){
  return(
    <ul style={{display: 'flex', listStyle: 'none'}}>
      <li style={{marginRight: '15px'}}>
        <NavLink to='/' className='link'>Home</NavLink>
      </li>
      <li style={{marginRight: '15px', textDecoration: 'none'}}>
        <NavLink to='/main' className='link'>Main</NavLink>
      </li>
      <li style={{marginRight: '15px'}}> 
        <NavLink to='/about' className='link'>About</NavLink>
      </li>
      <li style={{marginRight: '15px'}}>
        <NavLink to='/contact' className='link'>Contact</NavLink>
      </li>
      <li style={{marginRight: '15px', textDecoration: 'none'}}>
        <NavLink to='users' className='link'>Users</NavLink>
      </li>
    </ul>
  )

}