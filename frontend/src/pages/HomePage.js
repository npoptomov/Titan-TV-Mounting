import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import imgPng from '../assets/preview.png'

function HomePage() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const BookButton = styled(Button)({
        boxShadow: '0px 10px 20px 0px rgba(0,0,0,.5)',
        width: '50%',
        color: '#FFF',
        borderRadius: '10px',
        textTransform: 'none',
        fontSize: '1.5rem',
        backgroundColor: '#7D1DFF',
        borderColor: '#000000',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#FFF',
            color: '#7D1DFF',
        }
    });

    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>

            <Box sx={{ bgcolor: 'background.default', py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                                Your go-to expert for all your home care needs
                            </Typography>
                            <br />
                            <BookButton onClick={() => { navigate('/book'); }}>
                                Book a service
                            </BookButton>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={imgPng}
                                alt="Home care"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, pt: 30 }}>
                <Container maxWidth="lg">
                    <Typography align="center">
                        © Titan TV Technologies Inc {currentYear}
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default HomePage;
