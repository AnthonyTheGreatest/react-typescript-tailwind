type Button3Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
};

const Button3 = ({handleClick}: Button3Props) => {
  return (
    <button onClick={event => handleClick(event, 1)} >Click</button>
  );
};

export default Button3;