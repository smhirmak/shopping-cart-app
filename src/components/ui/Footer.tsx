import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Fab, Grid, Typography, Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useCallback } from 'react';
import MediaLinks from '../links/MediaLinks';

const Footer = () => {
  const trigger = useScrollTrigger({
    threshold: 300
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box bgcolor={'#232F3E'}>
      <Container maxWidth={'xl'} sx={{ pb: 10 }}>
        <Grid xs={12}>
          {' '}
          <Zoom in={trigger}>
            <Box
              role="presentation"
              sx={{
                position: 'fixed',
                bottom: 32,
                right: 32,
                zIndex: 1
              }}>
              <Fab
                onClick={scrollToTop}
                color="primary"
                size="small"
                aria-label="Scroll back to top">
                <KeyboardArrowUpIcon fontSize="medium" />
              </Fab>
            </Box>
          </Zoom>
        </Grid>
        <Grid
          container
          display={'flex'}
          justifyContent={'center'}
          columnSpacing={20}
          mt={3}
          bgcolor={'#232F3E'}
          color={'#c3c3c3'}
          pt={2}>
          <Grid item>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Typography variant="h5" color={'#fff'} mb={2}>
                Social Media
              </Typography>
              <MediaLinks
                href="https://github.com/smhirmak"
                name="GitHub"
                icon={<GitHubIcon sx={{ mr: 1 }} />}
              />
              <MediaLinks
                href="https://www.linkedin.com/in/muhammed-semih-irmak-307890152/"
                name="LinkedIn"
                icon={<LinkedInIcon sx={{ mr: 1 }} />}
              />
              <MediaLinks
                href="https://twitter.com/smhirmak"
                name="Twitter"
                icon={<TwitterIcon sx={{ mr: 1 }} />}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Typography variant="h5" color={'#fff'} mb={2}>
                About
              </Typography>
              <MediaLinks
                href="https://www.linkedin.com/in/muhammed-semih-irmak-307890152/"
                name={'Who am I?'}
              />
              <Typography>Contact me</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Typography variant="h5" color={'#fff'} mb={2}>
                Help
              </Typography>
              <MediaLinks href="/" name="FAQ" />
              <MediaLinks href="/" name="Your Asistant" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
