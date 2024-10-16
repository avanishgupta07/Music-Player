import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SongCard from './SongCard';
import { Box, Container } from '@mui/material';
import Navbar from './navbar';

const MusicList = ({ songs, onSongSelect, onOrderChange, currentSongId }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedSongs = Array.from(songs);
    const [removed] = reorderedSongs.splice(result.source.index, 1);
    reorderedSongs.splice(result.destination.index, 0, removed);

    onOrderChange(reorderedSongs);
  };

  return (
    <Container maxWidth="lg">
      <Navbar />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Box
              className="music-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
              sx={{
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '8px',
                padding: '10px',
                width: '100%',
                maxWidth: '100%',
                overflowX: 'hidden',
              }}
            >
              {songs.map((song, index) => (
                <Draggable key={song.id} draggableId={song.id.toString()} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        marginBottom: '10px',
                      }}
                    >
                      <SongCard
                        song={song}
                        onSelect={onSongSelect}
                        isCurrent={song.id === currentSongId}
                      />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default MusicList;

