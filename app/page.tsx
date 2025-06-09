import React from 'react'
import {Button} from '@/components/ui/button'
import Card from '@/components/companionCard'
import CompanionList from '@/components/campanionList'
import Cta from '@/components/cta'
import { recentSessions } from '@/constants'



const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'> 
        Popular Companoins
       
      </h1>

      <section className='home-section'>
      < Card id="1"
      name="Neural Network"
      topic="Machine Learning"
      subject="AI"
      duration={30}
      color="#ffda6e"
      
       />
     < Card 
     id="2"
      name="Number Theory"
      topic="Mathematics"
      subject="Math"
      duration={30}
      color="#e5d0ff"/>
     < Card 
     id="3"
      name="vocabulary"
      topic="Language Learning"
      subject="English"
      duration={30}
      color="#BDE7FF"/>

       </section>


       <section className='home-section'>
        <CompanionList
        title="Recently Completed Section"
        companions={recentSessions}
        classNames="w-2/3 max-lg-full"
        />
        <Cta/>
     
       </section>
    </main>
  )
}

export default Page