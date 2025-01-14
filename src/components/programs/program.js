import React from 'react';
import { programs } from '../../contents/programsdata';

export default function Program() {
  return (
    <div className="w-full lg:w-10/12 m-auto gap-20 flex flex-col">
      {programs.map((program, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center gap-10">
          <div className="h-28 w-28">
            <img src={`programs/${program.icon}`}/>
          </div>
          <div className="w-10/12">
            <h1 className="text-xl font-bold">{program.title}</h1>
            <ul className='list-disc ml-4 mt-2'>
              {program.descriptions.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
