import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,.5)',
    width: '80%',
    color: '#7D1DFF',
    borderRadius: '10px',
    textTransform: 'none',
    fontSize: '1.5rem',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#7D1DFF',
      color: '#FFFFFF',
    }
  });

  export default BootstrapButton;