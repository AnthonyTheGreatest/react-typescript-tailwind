type Input2Props = {
    value: string
}

const Input2 = ({value}: Input2Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

  return (
    <input type='text'
           value={value}
           onChange={handleChange}
           className='mt-2' />
  );
};

export default Input2;
