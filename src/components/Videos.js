import React from 'react';
import YouTube from 'react-youtube';

const Videos = () => {
  const videoIds = ['OMvFs4MJutg', 'KVJ1dy5VKq8', 'fTRVcRxQ2Bs'];

  const opts = {
    height: '240', // Adjust the height as needed
    width: '360', // Adjust the width as needed
    playerVars: {
      autoplay: 0,
    },
    origin: 'http://localhost:3000', // Replace with your React app's origin
  };

  return (
    <section id="videos" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Videos</h2>
      {/* Line in the middle */}
      <div className="w-full mb-8 md:col-span-2 flex justify-center items-center">
        <div className="bg-black h-1 w-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoIds.map((videoId, index) => (
          <div key={index} className="mb-4 max-w-md mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <YouTube videoId={videoId} opts={opts} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
