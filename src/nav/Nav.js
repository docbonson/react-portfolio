import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import litIcon from '../assets/lit-icon.png'
import skillsIcon from '../assets/skills-icon.png'
import stack from '../assets/stack.png'
import envelope from '../assets/envelope.png'
import '../styles/nav.css'

export default function Nav() {
  const location = useLocation()

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case '/':
        return 'nav-about'
      case '/skills':
        return 'nav-skills'
      case '/projects':
        return 'nav-projects'
      case '/contact':
        return 'nav-contact'
      default:
        return ''
    }
  }

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'ABOUT'
      case '/skills':
        return 'SKILLS'
      case '/projects':
        return 'PROJECTS'
      case '/contact':
        return 'CONTACT'
      default:
        return ''
    }
  }

  const navPositionClass = getNavPositionClass()
  const pageTitle = getPageTitle()

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass
  }

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass)
    const linkClass = isCurrent ? 'nav-link current' : 'nav-link'

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    )
  }

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink('/', litIcon, 'lit icon', 'nav-about')}
      {renderNavLink('/skills', skillsIcon, 'skills icon', 'nav-skills')}
      {renderNavLink('/projects', stack, 'stack icon', 'nav-projects')}
      {renderNavLink('/contact', envelope, 'envelope icon', 'nav-contact')}
    </nav>
  )
}
