type ButtonProps = {
    handleClick: () => void
};

const Button = ({handleClick}: ButtonProps) => {
  return (
    <button onClick={handleClick} >Click</button>
  );
};

export default Button;
