import React from 'react'
import Country from '../../Components/Country/Country';
import './Home.css';

const Home = ({countries}) => {

  return (
    <div className='home'>
        {
            countries.map((c) => {
                return <Country key={c.name.official} country={c}/>
            })
        }
    </div>
  )
}

export default Home