import { useEffect , useState} from 'react';
import React, { flexbox,card } from 'react';

import Logo from '../../assets/images/logo1.png'
// import card from './card';
// import Cards from '../Cards.js'


import './index.scss'
import Loader from 'react-loaders'
// import react from ReactDOM;
import AnimatedLetters from '../AnimatedLetters'

const Portfolio = ()=>{

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    // const Card = ({ src, title, duration }) => {
    //     return (
    //       <div className="me">
    //         <img src={src} alt="course image" />
    //         <footer>
    //           <h2>{title}</h2>
    //           <p>{duration}</p>
    //         </footer>
    //       </div>
    //     );
    //   };

    //   const Flexbox = (props) => {
    //     return <div className="flex">{props.children}</div>
    //   };
//creating project cards


const data =[
 { name:`Ritu` ,
  img:`./../issue.jpg`,
  review:`Protyusha `
},

{ name:`Ritu` ,
  img:`../../assets/images/logo4.png`,
  review:`Protyusha `
},


{ name:`Ritu` ,
  img:`../assets/images/logo4.png`,
  review:`Protyusha `
},

{ name:`Ritu` ,
  img:`../assets/images/logo4.png`,
  review:`Protyusha `
}


]
    return (
        <>
    
    <div className="container portfolio-page">
        <div className="text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P','' ,'r','', 'o',' ', 'j','','e', ' ','c ',' ' ,'t']}
              idx={15}
            />
          </h1>
        
          </div>
          </div>
          {/* <div className='flexbox'> */}
          
     {/* <Flexbox>
        <card
            src={Logo}
            title="HTML & CSS"
            duration="42 h" 

        />


          <card
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3zPgjUh_N6_Fs4CDYT__r_&ust=1707201971673000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNjnmYvNk4QDFQAAAAAdAAAAABAR"
            title="HTML & CSS"
            duration="42 h" 

        />

           <card
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3zPgjUh_N6_Fs4CDYT__r_&ust=1707201971673000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNjnmYvNk4QDFQAAAAAdAAAAABAR"
            title="HTML & CSS"
            duration="42 h" 

        />
     </Flexbox> */}
     {/* </div> */}
    
    {/* <Cards/> */}

    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        {data.map((d) =>(
        <div>
          <div>
            <img src={d.img} alt="" />
            </div>
            <div>
              <p>{d.name}</p>
              <p>{d.review}</p>
              <button>Read more</button>
              </div>

          </div>

        ))}
        
      </div>
    </div>
     
          <Loader type="pacman" />
          </>
    
    )
}

export default Portfolio