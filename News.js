import React from 'react';

const News = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-brown-700">What’s New</h3>
          <p className="text-brown-500 mt-4">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brown-700">Latest News</h3>
          <p className="text-brown-500 mt-4">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
