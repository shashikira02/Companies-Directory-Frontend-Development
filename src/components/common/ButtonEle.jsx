import Button from '@mui/material/Button';

const ButtonEle = ({children, onClick}) => {
  return (
    <Button color="secondary" onClick={onClick} >{children}</Button>
  )
}

export default ButtonEle;
