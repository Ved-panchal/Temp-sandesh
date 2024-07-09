"use client"
import { useEffect } from 'react';
import { waveform } from 'ldrs';

const Loading = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      waveform.register();
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <l-waveform
        size="35"
        stroke="3.5"
        speed="1"
        color="black"
      ></l-waveform>
    </div>
  );
};

export default Loading;
