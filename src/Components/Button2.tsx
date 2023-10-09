type Button2Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const Button2 = ({handleClick}: Button2Props) => {
  return (
    <button onClick={handleClick} >Click</button>
  );
};

export default Button2;