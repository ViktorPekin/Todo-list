import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <header className='header'>
      <nav className='header__link-container'>
      <NavLink to='/todo' className={( { isActive }) => isActive ? 'header__link_active' : 'header__link'}>Todo List</NavLink>
      <NavLink to='/todo-api' className={( { isActive }) => isActive ? 'header__link_active' : 'header__link'}>Todo List API</NavLink>
      </nav>
    </header>
  )
}

export default Header;
