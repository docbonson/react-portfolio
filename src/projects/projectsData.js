import projectPlaceholder from '../assets/project-1.png'
import weatherApp from '../assets/weather.png'

const projectsData = [
  {
    id: 1,
    title: 'Weather App',
    image: weatherApp,
    description: (
      <>
        <p>
          This is a basic weather app build using React. It has a dynamic
          background depending on temperature and users can switch between
          Fahrenheit and Celsius. I am planning on adding more functionality to
          this. Including weather tracking radar.
        </p>
      </>
    ),
    github: 'https://github.com/docbonson/weather-app',
    demo: 'https://skizz-weather-app.netlify.app/',
  },
  {
    id: 2,
    title: 'Testing',
    image: projectPlaceholder,
    description: (
      <>
        <p>Nothing to see here. Please move along</p>
      </>
    ),
    github: 'https://github.com',
    demo: 'https://netlify.com',
  },
  // Add more projects if needed
]

export default projectsData
