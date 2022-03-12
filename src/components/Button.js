import {Button} from "@mui/material"


const Button = ({}) => {
  return (
    <div>
      <Button>-</Button>
      <span>{count}</span>
      <Button>+</Button>
      <Button
        variant="outlined"
        sx={{
          width: 140,
          height: 25,
          borderRadius: 4
        }}
      >Order</Button>
    </div>
  )
}
export default Button