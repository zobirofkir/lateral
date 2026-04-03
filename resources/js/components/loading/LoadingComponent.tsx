import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#D4B896] border-t-[#6B3410] rounded-full animate-spin"></div>

      </div>
    </div>
  );
};

export default LoadingComponent;