import {useState} from 'react'

type AuthUser = {
    name: string
    email: string
};

const User = () => {
    // user can be null or AuthUser
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'Joe',
            email: 'joe@example.com'
        });
    };

    const handleLogout = () => setUser(null);

  return (
    <div>
        <button onClick={handleLogin} 
                className='bg-blue-500 px-2 m-2' >Login</button>
        <button onClick={handleLogout}
                className='bg-blue-500 px-2 m-2' >Logout</button>
        {user && ( <div>
                        <p>Name: {user?.name} </p>
                        <p>Email: {user?.email} </p>
                   </div> )}
    </div>
  );
};

export default User;
