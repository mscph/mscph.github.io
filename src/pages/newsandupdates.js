import React from 'react';
import { newsandupdates } from '../contents/newsandupdates';
import NewsandUpdatesChip from '../components/newsandupdateschip';
import Footer from '../components/Footer';

export default function NewsandUpdates() {

  // Sort news by date descending (most recent first)
  const sortedNews = [...newsandupdates].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className='mt-5'>
      <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>NEWS AND UPDATES</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10'>
        {sortedNews.slice(0, 20).map((data, idx) => (
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

      <Footer />
    </div>
  );
}
