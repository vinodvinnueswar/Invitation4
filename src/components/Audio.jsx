import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const WaveformPlayer = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create WaveSurfer instance
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#a67f16',
      progressColor: '#B07C0B',
      height: 50,
      responsive: true,
      barWidth: 3,
    });

    wavesurferRef.current.load(audioUrl);

    // Cleanup
    return () => {
      wavesurferRef.current.destroy();
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    wavesurferRef.current.playPause();
    setIsPlaying(prev => !prev);
  };

  return (
    <div>
    <div className='Wave-Player' ref={waveformRef} />

  
  <div className="Wave-button">
  <button className='button' onClick={handlePlayPause}>
      {isPlaying ? '⏸' : '▶'}
    </button>
  </div>
  </div>
  );
};

export default WaveformPlayer;
