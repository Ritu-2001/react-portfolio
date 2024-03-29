import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'

// import Designer  from '../../assets/images/Designer girl.gif'
import Logo from './Logo'
import './index.scss'

const Home =  () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ' ,'P', 'r', 'o', 't', 'y', 'u', 's' , 'h' , 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]


  useEffect(() => {
     setTimeout(() => {
     return  setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
<<<<<<< HEAD
          <h2>Front End Developer / Problem Solver  / Techenthugist </h2>
=======
          <h2>Front End Developer / Problem solver  / Techenthusiast </h2>
>>>>>>> 7a1e1b77971dabb1d35d55d5928f899d5b6653fa
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
      {/* <img  src={Designer}   className='girl' alt="animmation girl picture"/> */}

        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
          }

export default Home
