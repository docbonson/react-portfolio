import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import litIcon from '../assets/lit-icon.png'
import skillsIcon from '../assets/dead-eye.png'
import stack from '../assets/stack.png'
import envelope from '../assets/envelope.png'
import '../styles/nav.css'

const navigationData = [
  {
    to: '/',
    icon: litIcon,
    altText: 'lit icon',
    className: 'nav-about',
    title: 'ABOUT',
  },
  {
    to: '/skills',
    icon: skillsIcon,
    altText: 'skills icon',
    className: 'nav-skills',
    title: 'SKILLS',
  },
  {
    to: '/projects',
    icon: stack,
    altText: 'stack icon',
    className: 'nav-projects',
    title: 'PROJECTS',
  },
  {
    to: '/contact',
    icon: envelope,
    altText: 'envelope icon',
    className: 'nav-contact',
    title: 'CONTACT',
  },
]

const Nav = () => {
  const location = useLocation()

  const getNavPositionClass = () => {
    const found = navigationData.find((item) => item.to === location.pathname)
    return found ? found.className : ''
  }

  const getPageTitle = () => {
    const found = navigationData.find((item) => item.to === location.pathname)
    return found ? found.title : ''
  }

  const navPositionClass = getNavPositionClass()
  const pageTitle = getPageTitle()

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass
  }

  const renderNavLink = (item) => {
    const isCurrent = isCurrentPage(item.className)
    const linkClass = isCurrent ? 'nav-link current' : 'nav-link'

    return (
      <Link to={item.to} className={linkClass}>
        <img src={item.icon} alt={item.altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    )
  }

  return (
    <nav className={`nav ${navPositionClass}`}>
      {navigationData.map((item) => renderNavLink(item))}
    </nav>
  )
}

export default Nav
