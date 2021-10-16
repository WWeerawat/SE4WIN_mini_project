import { Button } from "react-bootstrap";

const Button_Com = ({ onClick, text, color }) => {
  return(              
      <Button onClick = { onClick } variant = { color } >
          {text}
      </Button>
  )
};

export default Button_Com;
