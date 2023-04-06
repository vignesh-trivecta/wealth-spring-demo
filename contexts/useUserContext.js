 
import { createContext, useState } from 'react';

//create a context, with createContext api
export const userContext = createContext();

const UserProvider = (props) => {
    // this state will be shared with all components 
    const [loggedin, setLoggedIn] = useState(false);

    return (
        // this is the provider providing state
        <userContext.Provider value={[loggedin, setLoggedIn]}>
            {props.children}
        </userContext.Provider>
    );
};

export default UserProvider;