import React from "react";
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { styled, } from '@mui/material/styles';

export function Navbar() {
    const MenuItem = styled(Button)({
        boxShadow: '0px 30px 30px 0px rgba(0,0,0,.5)',
        color: '#FFF',
        marginRight: '10px',
        borderRadius: '15px',
        textTransform: 'none',
        backgroundColor: '#7D1DFF',
        borderColor: '#000000',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#FFF',
          color: '#7D1DFF',
        }
      });
    
      const menuItemSizes = {
        fontSize: { xs: '0.8rem', lg: '1rem' },
      }
    
    return <AppBar position="sticky" sx={{
        bgcolor: '#7D1DFF'
    }}>
        <Toolbar>
            <Typography component="a" href="/" variant="h6" sx={{
                textDecoration: 'none',
                color: 'inherit',
                flexGrow: 1,
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                textAlign: 'left',
                fontSize: {
                    lg: '1.7rem'
                }
            }}>
                TitanTV Mounting
            </Typography>
            <MenuItem sx={menuItemSizes}>How it works</MenuItem>
            <MenuItem sx={menuItemSizes}>About us</MenuItem>
            <MenuItem sx={menuItemSizes}>FAQ</MenuItem>
        </Toolbar>
    </AppBar>;
}
