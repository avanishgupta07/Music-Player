import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import {
  Box,
  IconButton,
  Slider,
  Typography,
  Paper,
  Divider,
  Grow,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

// Dummy image URL
const dummyImage = "data:image/jpeg;base64,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"; 
// Replace this with an actual image URL if needed


const Image2="https://s.cafebazaar.ir/images/icons/media.audioplayer.musicplayer-4fd5d06a-996a-4d75-a7cd-45fe68d812dd_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize";














const MusicPlayer = ({ song, songs, onSongChange }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (sound) {
      sound.stop();
    }

    if (song) {
      const newSound = new Howl({
        src: [song.url],
        html5: true,
        volume: volume,
        onend: () => {
          handleNext();
        },
      });
      setSound(newSound);
      newSound.play();
      setIsPlaying(true);
    }

    return () => {
      if (sound) {
        sound.stop();
      }
    };
  }, [song]);

  const handlePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(s => s.id === song.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    onSongChange(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex(s => s.id === song.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    onSongChange(songs[previousIndex]);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (sound) {
      sound.volume(newValue);
    }
  };

  return (
    <Grow in={true} timeout={500}>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: '16px',
          backgroundColor: 'rgb(20, 20, 20)',
          color: 'white',
          width: '300px',
          border: '2px solid rgb(220,20,60)', // Border around the entire music player
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '12px', // Border radius for the image container
            overflow: 'hidden',
            border: '2px solid rgb(220,20,60)', // Border around the image
            marginBottom: 2,
          }}
        >
          <img
            src={dummyImage}
            alt={song?.title || "Dummy Image"}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
            }}
          />
          <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
            {song?.artist || 'Michael Jackson'}
          </Typography>
        </Box>
        <Divider sx={{ marginY: 2, backgroundColor: 'rgb(220,20,60)' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ color: 'rgb(220,20,60)' }}>
            {song?.title || 'Beat It'}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            {song?.artist || 'Michael Jackson'}
          </Typography>
        </Box>
        <Divider sx={{ marginY: 2, backgroundColor: 'rgb(220,20,60)' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <IconButton onClick={handlePrevious} sx={{ color: 'white' }}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton onClick={handlePlayPause} sx={{ color: 'white' }}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: 'white' }}>
            <SkipNextIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton onClick={() => handleVolumeChange(null, Math.max(volume - 0.1, 0))} sx={{ color: 'white' }}>
            <VolumeDownIcon />
          </IconButton>
          <Slider
            value={volume}
            onChange={handleVolumeChange}
            aria-labelledby="volume-slider"
            min={0}
            max={1}
            step={0.1}
            sx={{
              width: 200,
              color: 'rgb(220,20,60)',
              '& .MuiSlider-thumb': {
                borderRadius: '50%',
              },
            }}
          />
          <IconButton onClick={() => handleVolumeChange(null, Math.min(volume + 0.1, 1))} sx={{ color: 'white' }}>
            <VolumeUpIcon />
          </IconButton>
    
            
          
        </Box>
        <img
            src={Image2}
            alt={song?.title || "Image2"}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
            }}
          />
      </Paper>
      
    </Grow>
  );
};

export default MusicPlayer;
