import React, { useState } from 'react'
import AboutMenuItem from './AboutMenuItem'
import AboutSubheading from './AboutSubheading'
import subheadingsData from './subheadingsData'
import personalIcon from '../assets/moebius-triangle.png'
import educationIcon from '../assets/upgrade.png'
import careerIcon from '../assets/triple-corn.png'
import resumeFile from '../assets/dave-bonson-resume.pdf'

const AboutMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1)
  const [activeSubheading, setActiveSubheading] = useState(1)

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem)
    setActiveSubheading(1)
  }

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading)
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = 'dave-bonson-resume.pdf'
    link.click()
  }

  const menuItems = ['PERSONAL', 'EDUCATION', 'CAREER']
  const activeMenuTitle = menuItems[activeMenuItem - 1]
  const activeMenuIcon =
    activeMenuTitle === 'PERSONAL'
      ? personalIcon
      : activeMenuTitle === 'EDUCATION'
      ? educationIcon
      : careerIcon

  const subHeadings = subheadingsData[activeMenuItem]

  return (
    <>
      <div className="menu">
        {menuItems.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick(index + 1)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
          <h3>{activeMenuTitle}</h3>
          {activeMenuTitle === 'CAREER' && (
            <button className="button" onClick={handleDownloadResume}>
              Download Resume
            </button>
          )}
        </div>
        {subHeadings.map((subheading, index) => (
          <AboutSubheading
            key={index}
            title={subheading.title}
            content={subheading.content}
            active={activeSubheading === index + 1}
            onClick={() => handleSubheadingClick(index + 1)}
            menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
  )
}

export default AboutMenu
