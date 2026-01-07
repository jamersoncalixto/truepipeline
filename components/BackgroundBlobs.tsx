import React from 'react';

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
       {/* Top Right */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600/10 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob"></div>
       {/* Bottom Left */}
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sky-500/10 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
       {/* Middle Left */}
       <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-400/10 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
       {/* Middle Right */}
       <div className="absolute top-1/3 right-0 transform translate-x-1/3 w-80 h-80 bg-sky-300/10 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default BackgroundBlobs;