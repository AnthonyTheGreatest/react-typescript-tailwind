import {useState} from 'react'

type AuthUser = {
    name: string
    email: string
};

const User2 = () => {
    // user will always have type AuthUser after initialization
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: 'Joe',
            email: 'joe@example.com'
        });
    };

  return (
    <div>
        {!user.name
            ? <button onClick={handleLogin} 
                      className='bg-blue-500 px-2 m-2' >Login</button>
            : ( <div className='bg-slate-300 px-2'>
                <p>Name: {user.name} </p>
                <p>Email: {user.email} </p>
           </div> )}
    </div>
  );
};

export default User2;
