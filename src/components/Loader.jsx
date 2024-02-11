
import { useState, useEffect } from 'react';

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 4 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`flex items-center bottom-0 bg-slate-100 left-0 right-0 fixed top-0 w-full  justify-center z-50 h-screen ${isLoading ? 'block' : 'hidden'}`}>
      <div className="bg-h-500 bg-blue-500 h-screen w-full"></div> 
      </div>
      );
};