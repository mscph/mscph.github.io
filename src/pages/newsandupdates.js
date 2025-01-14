import React from 'react';
import { newsandupdates } from '../contents/newsandupdates';
import NewsandUpdatesChip from '../components/newsandupdateschip';
import Footer from '../components/Footer';

export default function NewsandUpdates() {

  const getRandomItems = (items, count) => {
    return [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, count); 
  };

  const randomNews = getRandomItems(newsandupdates, 9);

  return (
    <div className='mt-5'>
      <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>NEWS AND UPDATES</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10'>
        {randomNews.map((data, idx) => (
          <NewsandUpdatesChip
            key={idx}
            id={data.id}
            date={data.date}
            headline={data.headline}
            description={data.description}
            cover_image={data.cover_image}
          />
        ))}
      </div>

      <Footer/>
    </div>
  );
}
