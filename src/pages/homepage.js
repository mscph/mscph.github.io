import React from 'react'
import Footer from '../components/Footer'
import DonateChip from '../components/donate'
import { newsandupdates } from '../contents/newsandupdates'
import NewsandUpdatesChip from '../components/newsandupdateschip'
import { programs } from '../contents/programsdata'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function HomePage() {

  const getRandomItems = (items, count) => {
    return [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, count); 
  };

  const randomNews = getRandomItems(newsandupdates, 3);

  return (
    <div>
      <main className='w-full flex items-center flex-col mt-10'>

        <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl'>Be the Heart of Christ on Earth. Help the Missions.</h1>
        <p className=' md:w-10/12 text-center mb-10 mt-2'>The MSC Mission Office believes that everyone is called to be the heart of Christ here on earth.</p>

        <div className="w-full lg:h-[50vh]">
          <img
            alt="This is the cover image"
            src="mscpictures/Feb242024/featured_photo2.jpg"
            className="w-full h-full object-cover"
          />
        </div>
         

      </main>

        <section className='p-5 lg:p-10'>

        <p className='mt-4 text-center italic'>
        “For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me…” - Matthew 25:35-36
              </p>

          <div className='mt-10 flex flex-col md:flex-row'>
            <div className='md:w-6/12'>
              <iframe className='h-full w-full' src="https://www.youtube.com/embed/yUdPayRnvpA">
              </iframe>
            </div>

            <div className='mt-5 lg:mt-0 p-0 lg:p-10 md:w-6/12'> 
              <p className='text-justify'>Our mission for the poor remains the greatest challenge for us as Christians. It is always been a call for us to help others who are in need. As Pope Francis emphasize in his homily during his inauguration mass, a Christian "must open his arms to protect all of God's people and embrace with tender affection the whole of humanity, especially the poorest, the weakest, the least important.” However, our aim here is not only to protect God’s people, but to ensure that even the poorest among them have access to basic services like education, basic health care and safe drinking water. We are born Christians and in order to become one, we must follow Christ's footstep towards his kingdom.</p>
            </div>
          </div>
        </section>

        <section className='min-h-96 p-5 sm:p-10'>
          <h1 className='text-center text-red-600 font-bold text-lg sm:text-xl'>PROGRAMS AND SERVICES</h1>

          <div className='flex flex-wrap justify-evenly mt-14 gap-x-3 gap-y-4 mb-4'>
            {programs.map((program, index) => (
              <div key={index} className='flex flex-col items-center w-full sm:w-auto'>
                <div className="h-28 w-28 sm:h-32 sm:w-32">
                  <img src={`programs/${program.icon}`} alt={program.title} />
                </div>
                <div className='mt-2 w-32'>
                  <h1 className="text-xs sm:text-sm text-center italic">{program.title}</h1>
                </div>
              </div>
            ))}
          </div>

          <Link to={'/programs'}>
            <div className='flex flex-row mt-10 items-center justify-center'>
              <p className='text-center'>Learn more</p>
              <FaChevronRight />
            </div>
          </Link>
        </section>



        <section>
          <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl my-10'>NEWS AND UPDATES</h1>

          {/* <div className='flex flex-col lg:flex-row mb-5'>
            <div className='h-56 lg:h-80 w-full lg:w-6/12 bg-gray-200'></div>

            <div className='w-full lg:w-6/12 lg:p-10'>
              <p className='my-2 opacity-50 text-xs'>May 22, 2024</p>
              <h2 className='font-bold text-lg mb-4'>Fr. Roger’s Visit in MSC Center for the Poor and CEPAGCO communities</h2>
              <p className='text-sm'>Fr. Roger Purcell, msc is the Director of the MSC Mission Office Australia. He visited the Philippines last May 6-20, 2024 to check and monitor some projects supported by the MO Australia. He was also able to meet some collabotators, partners and beneficiaries of the projects and discussed matters to intensify our partnership with them.</p>

              <div className='lg:mt-10'>
                <p className='text-red-400 hover:cursor-pointer text-end lg:text-start'>Read More</p>
              </div>
            </div>
          </div> */}

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
