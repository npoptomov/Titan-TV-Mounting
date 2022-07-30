import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

export const BootstrapButton = styled(Button)({
  boxShadow: '0px 10px 20px 0px rgba(0,0,0,.5)',
  width: '100%',
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

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  fontSize: "18px",
  textAlign: 'left',
  color: '#fff'
}));

export const CssTextField = styled(TextField)({
  width: '100%',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#7D1DFF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7D1DFF',
    },
  },
});




