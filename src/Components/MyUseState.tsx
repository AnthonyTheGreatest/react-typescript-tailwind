import {useState} from 'react'

const MyUseState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
        <button className='bg-blue-500 px-2 m-2'
                onClick={handleLogin} >Login</button>
        <button className='bg-blue-500 px-2 m-2'
                onClick={handleLogout} >Logout</button>
        <p>User is {isLoggedIn ? 'logged in' : 'logged out'}.</p>
    </div>
  );
};

export default MyUseState;
