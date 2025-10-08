import Button from '@mui/material/Button';

const ButtonEle = ({children, onClick}) => {
  return (
    <Button variant='contained' onClick={onClick} >{children}</Button>
  )
}

export default ButtonEle;
