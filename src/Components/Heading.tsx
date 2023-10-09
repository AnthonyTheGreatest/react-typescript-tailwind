type HeadingProps = {
    children: string
};

const Heading = ({children}: HeadingProps) => {
  return (
    <div>
        <h2>{children}</h2>
    </div>
  );
};

export default Heading;