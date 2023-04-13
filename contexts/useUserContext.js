 
import { createContext, useState } from 'react';

//create a context, with createContext api
export const userContext = createContext();

const UserContext = (props) => {
    // this state will be shared with all components 
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        // this is the provider providing state
        <userContext.Provider value={[loggedIn, setLoggedIn]}>
            {props.children}
        </userContext.Provider>
    );
};

export default UserContext;
