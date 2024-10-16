import React, { useState, useEffect } from 'react';
import MusicList from './components/MusicList';
import MusicPlayer from './components/MusicPlayer';
import './styles/styles.css';
import Sidebar from './components/Sidebar';


const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    // Dummy song data
    const dummySongs = [
      { id: 1, title: 'Song One', artist: 'Artist One', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { id: 2, title: 'Song Two', artist: 'Artist Two', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
      { id: 3, title: 'Song Three', artist: 'Artist Three', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    ];
    setSongs(dummySongs);
  }, []);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
  };

  const handleOrderChange = (newSongs) => {
    setSongs(newSongs);
  };

  const handleSongChange = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="app">
      <header className="app-header">
      
        
        <Sidebar/>
   \
      </header>
      
      <MusicList songs={songs} onSongSelect={handleSongSelect} onOrderChange={handleOrderChange} />
      
      <MusicPlayer song={currentSong} songs={songs} onSongChange={handleSongChange} />
    </div>
  );
};

export default App;