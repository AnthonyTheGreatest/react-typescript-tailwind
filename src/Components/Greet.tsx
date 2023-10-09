type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
};

const Greet = ({name, messageCount = 0, isLoggedIn}: GreetProps) => {
  return (
    <div>
        <p>
            {isLoggedIn
                ? `Welcome ${name}! You have ${messageCount} unread messages.`
                : 'Welcome Guest!'}
        </p>
    </div>
  );
};

export default Greet;
