import React from 'react';
import banner1 from '../assets/banner1.jpeg'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.jpeg'

const HorizontalScrollContainer = () => {
  return (<div className="flex overflow-x-auto whitespace-nowrap">
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
        <div className="min-w-1000">
          <img src={banner1} alt="Image 1" className="inline-block w-200 m-2" />
          <img src={banner2} alt="Image 2" className="inline-block w-100 h-80 m-2" />
          <img src={banner3} alt="Image 3" className="inline-block w-100 h-80 m-2" />
        </div>
    </div>
</div>
  );
};


export default HorizontalScrollContainer;