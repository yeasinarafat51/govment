import React from 'react'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'

const Navbar = () => {
  return (
    <nav className='py-5'>
        <Container>
           <div className='flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full'>
           <SectionTitle >GoverningDocs</SectionTitle>

           </div>
        </Container>
      
    </nav>
  )
}

export default Navbar
