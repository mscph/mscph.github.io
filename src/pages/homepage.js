import React from 'react'
import Footer from '../components/Footer'
import DonateChip from '../components/donate'
import { newsandupdates } from '../contents/newsandupdates'
import NewsandUpdatesChip from '../components/newsandupdateschip'
import { programs } from '../contents/programsdata'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa6'

export default function HomePage() {

  const getRandomItems = (items, count) => {
    return [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, count); 
  };

  const randomNews = getRandomItems(newsandupdates, 3);

  return (
    <div>
      <main className='w-full flex items-center flex-col mb-10 animate-fade'>
      <div className="mb-10 w-full h-[50vh]">
        <img
          alt="This is the cover image"
          src="mscpictures/Feb242024/featured_photo2.jpg"
          className="w-full h-full object-cover"
        />
      </div>


         
          <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>CARING FOR THE PEOPLE AND THE ENVIRONMENT</h1>
          <p className='w-11/12 text-sm lg:w-8/12 md:w-10/12 text-center'>Center for the Poor-MSC is a working arm of the Missionaries of the Sacred Heart, we are a grassroots, non-profit organization dedicated to caring for the people and the environment.</p>
        </main>

        <section className='min-h-96 bg-black p-10 animate-slideInLeft'>
          <h1 className='text-center text-white font-bold lg:text-xl'>PROGRAMS AND SERVICES</h1>

          
          <div className='flex flex-row justify-evenly mt-14 gap-10'>
          {programs.map((program, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className="h-28 w-28">
                <img src={`programs/${program.icon}`} alt={`${program.title} icon`} />
              </div>
              <div className='mt-2'>
                <h1 className="text-xs text-white text-center italic">{program.title}</h1>
              </div>
            </div>
          ))}
          </div> 

          <div className='flex flex-row mt-16 items-center justify-center'>
            <p className='text-white text-center'>Learn more</p>
            <FaChevronRight className='text-white'/>
          </div>

        </section>


        <section className='animate-fade'>
          <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl my-10'>NEWS AND UPDATES</h1>

          <div className='flex flex-col lg:flex-row mb-5'>
            <div className='h-56 lg:h-80 w-full lg:w-6/12 bg-gray-200'></div>

            <div className='w-full lg:w-6/12 lg:p-10'>
              <p className='my-2 opacity-50 text-xs'>May 22, 2024</p>
              <h2 className='font-bold text-lg mb-4'>Fr. Roger’s Visit in MSC Center for the Poor and CEPAGCO communities</h2>
              <p className='text-sm'>Fr. Roger Purcell, msc is the Director of the MSC Mission Office Australia. He visited the Philippines last May 6-20, 2024 to check and monitor some projects supported by the MO Australia. He was also able to meet some collabotators, partners and beneficiaries of the projects and discussed matters to intensify our partnership with them.</p>

              <div className='lg:mt-10'>
                <p className='text-red-400 hover:cursor-pointer text-end lg:text-start'>Read More</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row md:flex-row gap-10 justify-center'>
            {randomNews.map((data, idx) => (
               <NewsandUpdatesChip
                key={idx}
                id={data.id}
                cover_image={data.cover_image}
                date={data.date}
                headline={data.headline}
                description={data.description}
              />
            ))}
          </div>

          <div className='my-14'>
            <DonateChip/>
          </div>
          

        </section>
        
        
        
        <Footer/>
    </div>
  )
}
