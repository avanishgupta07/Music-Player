import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DiscoverIcon from '@mui/icons-material/Explore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        bgcolor: 'rgb(20, 20, 20)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        padding: '10px 0',
      }}
    >
      {/* Branding Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          paddingBottom: 0,
        }}
      >
        <MusicNoteIcon sx={{ color: 'rgb(220,20,60)', fontSize: 30, marginRight: 1 }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'rgb(220,20,60)' }}>
          Dream<span style={{ color: 'white' }}>Music</span>
        </Typography>
      </Box>

      <Box sx={{ padding: 2, paddingTop: 0, flexGrow: 1 }}>
        {/* Menu Section */}
        <Typography variant="caption" sx={{ color: 'gray', marginLeft: 1 }}>
          MENU
        </Typography>
        <List sx={{ marginBottom: 2 }}>
          <ListItem
            button
            sx={{
              '&:hover': {
                backgroundColor: 'rgb(220,20,60)',
              },
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            sx={{
              '&:hover': {
                backgroundColor: 'rgb(220,20,60)',
              },
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Trends" />
          </ListItem>
          <ListItem
            button
            sx={{
              '&:hover': {
                backgroundColor: 'rgb(220,20,60)',
              },
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <LibraryMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem
            button
            sx={{
              '&:hover': {
                backgroundColor: 'rgb(220,20,60)',
              },
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <DiscoverIcon />
            </ListItemIcon>
            <ListItemText primary="Discover" />
          </ListItem>
        </List>

        {/* Divider */}
        <Divider sx={{ backgroundColor: 'rgb(60, 60, 60)', marginY: 2 }} />
      </Box>

      {/* General Section at the Bottom */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="caption" sx={{ color: 'gray', marginLeft: 1 }}>
          GENERAL
        </Typography>
        <List>
          <ListItem
            button
            sx={{
              '&:hover': {
                backgroundColor: 'rgb(220,20,60)',
              },
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            button
            sx={{
              '&:hover': {
                backgroundColor: 'rgb(220,20,60)',
              },
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
       
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
