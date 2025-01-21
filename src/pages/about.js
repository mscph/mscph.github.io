import React from 'react'
import CoreValues from '../components/about/corevalues'
import Footer from '../components/Footer'
import Carousel from '../components/about/carousel'
import BoardOfTrusteesCard from '../components/about/boardoftrustees'
import { boardoftrustees } from '../contents/boardoftrusteesdata';
import Partners from '../components/about/partners'

export default function About() {
  return (
    <div className='mt-10'>
       <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>ABOUT US</h1>

       <p className='w-full m-auto text-center'>The Mission Office of the Missionaries of the Sacred Heart – Philippine Province formally opened on September 1, 2009 at the MSC Provincialate in Gilmore Avenue, Quezon City. Its primary purpose is to assist the MSC family in mobilizing resources, local and foreign, for development projects that are responsive to the needs of the communities they minister to, with particular attention to the poorest of the poor and in remote mission areas. </p>

      <div className='my-20'>
        <Carousel/>
      </div>
    

      <div>
        {/* VISION */}
        <div className='my-20'>
          <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>VISION</h1>
          <p className='lg:w-8/12 m-auto text-center italic'>A unifying structure for project services and resource mobilization of the Missionaries of the Sacred Heart Philippine Province for a new creation.</p>
        </div>

        {/* MISSION */}
        <div className='my-20'>
          <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>MISSION</h1>
          <p className='lg:w-8/12 m-auto text-center italic'>We commit to facilitate, organize and systematize the network of agencies and benefactors and to respond to the pastoral needs of the communities in coordination with the Lay as partners in mission towards witnessing the Spirituality of the Heart.</p>
        </div>
      </div>
     
      <div className='my-20'>
        <CoreValues/>
      </div>
      

      <div className='mt-20 flex flex-col lg:flex-row items-center'>

        <div className='bg-gray-200 w-full lg:w-6/12 h-72 lg:h-96'>

        </div>

        <div className='w-full lg:w-6/12 p-10 lg:h-96 lg:px-10 bg-red-600 flex flex-col items-center justify-center'>
          <h1 className='text-center text-lg font-bold text-white lg:text-2xl mb-4 lg:mt-0'>GOALS AND OBJECTIVES</h1>

          <ol type="1" className='leading-7'>
            <li className='text-white'>1. To promote the devotion to the Sacred Heart of Jesus and Our Lady of the sacred Heart in our motto, "May the Sacred Heart of Jesus be loved everywhere."</li>
            <li className='text-white'>2. To engage in charity works and seek substantial financial assistance for our programs and projects.</li>
            <li className='text-white'>3. To create comprehensive data base of benefactors, supporters and partners and to promote and nurture our relationship with them.
            </li>
            <li className='text-white'>4. To facilitate funding for different advocacies.</li>
            <li className='text-white'>5. To continually expand our fund-raising activities.</li>
          </ol>
        </div>
        
      </div>

      <div className='mt-20 flex flex-col-reverse lg:flex-row items-center justify-between'>

        <div className='w-full lg:w-6/12 p-10 lg:h-96 lg:px-10 bg-black flex flex-col items-center justify-center'>
          <h1 className='text-center text-lg font-bold text-white lg:text-2xl mb-4'>FIVE STRATEGIC POLICIES</h1>

          <ol type="1" className='leading-10'>
            <li className='text-white'>1. Sustainable Local Funds Development</li>
            <li className='text-white'>2. Increase Number of Partners (data base)</li>
            <li className='text-white'>3. Increase Engagement and Partnership with Stakeholders</li>
            <li className='text-white'>4. Government Compliant Status and Accreditation</li>
            <li className='text-white'>5. Networking with Selected Institution</li>
          </ol>
        </div>

        <div className='bg-gray-200 w-full lg:w-6/12 h-72 lg:h-96'></div>

      </div>


      <div className='my-40'>
        <h1 className='text-lg font-bold text-red-600 lg:text-2xl mb-4'>BOARD OF TRUSTEES</h1>
        
        <div className='flex flex-wrap justify-start gap-5 md:gap-4 lg:gap-4'>
            {boardoftrustees.map((data, idx) => (
              <BoardOfTrusteesCard
                key={idx}
                name={data.name}
                position={data.position}
              />
            ))}
        </div>
        
      </div>

      <div className='my-40'>
        <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>OUR PARTNERS</h1>

        <Partners/>
      </div>
       
      <Footer/>
    </div>
  )
}
