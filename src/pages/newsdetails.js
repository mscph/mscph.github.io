import React from 'react'
import { useParams } from 'react-router-dom'
import { newsandupdates } from '../contents/newsandupdates';
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import Footer from '../components/Footer';
import NewsandUpdatesChip from '../components/newsandupdateschip'

export default function NewsDetails() {

    const getRandomItems = (items, count) => {
      return [...items]
        .sort(() => Math.random() - 0.5)
        .slice(0, count); 
    };
  
  const randomNews = getRandomItems(newsandupdates, 3);
  

  const { id } = useParams();
  const newsItem = newsandupdates.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return <p>News item not found!</p>;
  }

  return (
    <div className='mt-10'>
        <h1 className='font-bold text-xl'>{newsItem.headline}</h1>
        <p className='text-gray-300'>{newsItem.date}</p>

        <div className='w-full h-96 bg-gray-300 mt-5'>
          <img src={`${newsItem.cover_image}`} alt={newsItem.headline}  className='h-full w-full object-cover'/>
        </div>

        <div className='mt-5'>
            <p>{newsItem.description}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 items-center w-full justify-center">
          {['featured_photo_2', 'featured_photo_3', 'featured_photo_4']
            .filter(photoKey => newsItem[photoKey])
            .map((photoKey, index) => (
              <div key={index} className="h-64 w-full lg:w-80">
                <img 
                  src={`${newsItem[photoKey]}`} 
                  alt={`Featured Photo ${index + 2}`} 
                  className="h-full w-full object-cover" 
                />
              </div>
            ))}
        </div>


        <div className='mt-10'>
          <h1 className='italic'>Share this news:</h1>

          <div className='flex flex-row gap-5 mb-3 mt-3'>
                <FaFacebook className='text-red-500 text-2xl' />
                <FaGoogle className='text-red-500 text-2xl'/>
                <FaInstagram className='text-red-500 text-2xl'/>
            </div>
        </div>

        <div className='mt-14'>
          <h1 className='font-bold text-2xl'>See More News</h1>

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
        </div>


        <Footer/>
    </div>
  )
}
