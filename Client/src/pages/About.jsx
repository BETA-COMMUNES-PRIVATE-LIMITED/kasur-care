import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import Button from '../components/shared/Button'
import about from '../assets/about.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'

const About = () => {
  return (
    <div className='bg-black'>
      <Wrapper>
        <div className='flex justify-between '>
          {/* left side */}
          <div className='flex-1 space-y-4 mt-4 items-center'>
            <div>
              <img src={about} alt='' className='h-70 w-145 rounded-2xl ' />
            </div>
            <div className='flex space-x-5'>
              <img src={about2} alt='' className='h-70 w-70 rounded-2xl'/>
              <img src={about3} alt='' className='h-70 w-70 rounded-2xl'/>
            </div>

          </div>
          {/* right side */}
          <div className='flex-1 '>
            <div className="mt-10">
              <Button> • Top Specialities • </Button>
            </div>
            {/* heading */}
            <div className=" ">
              <h1 className='text-white text-4xl font-semibold mt-4'>We are committed to
                understanding your <span className="text-blue-600"> unique
                  needs and delivering care.</span></h1>
                  <p className='text-white mt-2'>As a trusted health as a trusted healthcare provider in our community, we are passionate about promoting health and wellness beyond the clinic.</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default About