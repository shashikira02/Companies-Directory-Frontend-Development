import Button from '@mui/material/Button';

const Button = ({children, onClick}) => {
  return (
    <Button color="secondary" onClick={onClick} >{children}</Button>
  )
}

export default Button
