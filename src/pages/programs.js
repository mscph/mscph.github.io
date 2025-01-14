import React from 'react'
import Program from '../components/programs/program'
import { newsandupdates } from '../contents/newsandupdates';
import NewsandUpdatesChip from '../components/newsandupdateschip';
import Footer from '../components/Footer';


export default function Programs() {

  const getRandomItems = (items, count) => {
    return [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, count); 
  };

  const randomNews = getRandomItems(newsandupdates, 3);

  return (
    <div className='mt-10'>
      <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>OUR PROGRAMS AND ADVOCACIES</h1>
      
      <div className='mt-20'>
        <Program/>
      </div>

      <div className='mt-40 my-16'>
        <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>GET UPDATED</h1>
      </div>

      

      <div className='flex flex-col lg:flex-row md:flex-row gap-10 justify-center'>
        {randomNews.map((data, idx) => (
          <NewsandUpdatesChip
            key={idx}
            id={data.id}
            date={data.date}
            cover_image={data.cover_image}
            headline={data.headline}
            description={data.description}
          />
        ))}
      </div>

    <Footer/>
    </div>
  )
}
