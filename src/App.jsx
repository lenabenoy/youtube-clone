import React from 'react';
import { Box, AppBar, Toolbar, Typography, InputBase, IconButton, Grid, Card, CardMedia, CardContent, Paper } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, VideoCall, Notifications, AccountCircle, Home, Whatshot, Subscriptions } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0f0f0f', paper: '#0f0f0f' },
    text: { primary: '#fff' },
  },
});

function App() {
  const mockVideos = Array.from({ length: 8 });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
        <AppBar position="sticky" sx={{ bgcolor: '#0f0f0f', backgroundImage: 'none', boxShadow: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton edge="start" color="inherit"><MenuIcon /></IconButton>
              <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff', letterSpacing: '-1px' }}>YouTube</Typography>
            </Box>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, bgcolor: '#121212', border: '1px solid #303030', borderRadius: 20 }}>
              <InputBase sx={{ ml: 2, flex: 1, color: 'white' }} placeholder="Search" />
              <IconButton type="button" sx={{ p: '10px', bgcolor: '#222', borderRadius: '0 20px 20px 0' }} color="inherit">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton color="inherit"><VideoCall /></IconButton>
              <IconButton color="inherit"><Notifications /></IconButton>
              <IconButton color="inherit"><AccountCircle /></IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: 240, p: 2, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2.5, cursor: 'pointer' }}><Home /> <Typography>Home</Typography></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2.5, cursor: 'pointer' }}><Whatshot /> <Typography>Trending</Typography></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2.5, cursor: 'pointer' }}><Subscriptions /> <Typography>Subscriptions</Typography></Box>
          </Box>

          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              {mockVideos.map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card sx={{ bgcolor: 'transparent', backgroundImage: 'none', boxShadow: 'none' }}>
                    <CardMedia component="img" height="140" image={`https://picsum.photos/300/160?random=${index}`} alt="Thumbnail" sx={{ borderRadius: 3 }} />
                    <CardContent sx={{ px: 0, pt: 1 }}>
                      <Typography variant="body1" fontWeight="bold" noWrap>Clone Video Title {index + 1}</Typography>
                      <Typography variant="body2" color="gray" sx={{ mt: 0.5 }}>Channel Creator Name</Typography>
                      <Typography variant="caption" color="gray">100K views • 2 days ago</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;