import React from 'react'

function Home() {
  return (
    <div className="flex flex-wrap gap-5 m-5 justify-center">
      <div>
        primary lightest<div className='w-10 h-10 bg-primary-lightest border-2 border-black'></div>
        primary lighter<div className='w-10 h-10 bg-primary-lighter border-2 border-black'></div>
        primary light<div className='w-10 h-10 bg-primary-light border-2 border-black'></div>
        primary<div className='w-10 h-10 bg-primary border-2 border-black'></div>
        primary dark<div className='w-10 h-10 bg-primary-dark border-2 border-black'></div>
        primary darker<div className='w-10 h-10 bg-primary-darker border-2 border-black'></div>
        primary darkest<div className='w-10 h-10 bg-primary-darkest border-2 border-black'></div>
      </div>
      <div>
        secondary lightest<div className='w-10 h-10 bg-secondary-lightest border-2 border-black'></div>
        secondary lighter<div className='w-10 h-10 bg-secondary-lighter border-2 border-black'></div>
        secondary light<div className='w-10 h-10 bg-secondary-light border-2 border-black'></div>
        secondary<div className='w-10 h-10 bg-secondary border-2 border-black'></div>
        secondary dark<div className='w-10 h-10 bg-secondary-dark border-2 border-black'></div>
        secondary darker<div className='w-10 h-10 bg-secondary-darker border-2 border-black'></div>
        secondary darkest<div className='w-10 h-10 bg-secondary-darkest border-2 border-black'></div>
      </div>
      <div>
        background lightest<div className='w-10 h-10 bg-background-lightest border-2 border-black'></div>
        background lighter<div className='w-10 h-10 bg-background-lighter border-2 border-black'></div>
        background light<div className='w-10 h-10 bg-background-light border-2 border-black'></div>
        background<div className='w-10 h-10 bg-background border-2 border-black'></div>
        background dark<div className='w-10 h-10 bg-background-dark border-2 border-black'></div>
        background darker<div className='w-10 h-10 bg-background-darker border-2 border-black'></div>
        background darkest<div className='w-10 h-10 bg-background-darkest border-2 border-black'></div>
      </div>
      gray<div className='w-10 h-10 bg-gray border-2 border-black'></div>
    </div>
  )
}

export default Home