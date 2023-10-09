type TailwindProps = {
    className?: React.ComponentProps<'div'>['className']
    text: string
};

const Tailwind = ({className, text}: TailwindProps) => {
  return (
    <div className={className} >{text}</div>
  )
}

export default Tailwind