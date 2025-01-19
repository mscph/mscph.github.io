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
      
      <p className='text-center italic mt-10'>
      The process of project identification (or need-assessment) must be consultative and participatory, keeping in mind that the beneficiary-communities are the stakeholders in the implementation, monitoring and sustainability of the project. Community members are expected to provide a local counterpart, say, in the form of labor or raw materials. It is recognized that genuine, sustained and active community participation all throughout the project cycle results to a successful implementation of the project.
      <br/>
      <br/>
      Communities who receive assistance are not limited to Catholics but rather the work of MSC is to benefit all people, irrespective of religion race or political persuasion.
      <br/>
      <br/>
      Project proposals follow a simple format. Mission Office Philippines can assist the applicants (members of the MSC religious congregations or designated parish worker) in completing the forms. After screening and approval by the Board of Trustees, the proposals are forwarded to the Board of the MSC Mission Office Australia, Inc. which either rejects or accepts the applications in accordance with the defined protocol. If the application has been approved, the allocated funding is transferred to the Mission Office Philippines, Inc. It then coordinates with the applicants regarding the release of the funds.

      Mission Office does not transfer funds to an individual’s bank account but only to recognized institutions or organizations. At the completion of a project the applicant is required to complete an acquittal form along with a project report to be submitted to the Mission Office Philippines. Projects usually run from one to two years.
      </p>
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
