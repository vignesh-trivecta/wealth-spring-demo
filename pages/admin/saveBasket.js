import { useRouter } from 'next/router';
import { userContext } from "../../contexts/useUserContext";
import { useContext } from 'react';
import Link from 'next/link';

function SaveBasket(){
    
  const router = useRouter();
  const [loggedin, setLoggedIn] = useContext(userContext);

  const handleClick = () => {
    alert('Basket created successfully!');
    router.push('/admin/dashboard');
    };

  return (
    loggedin ?
    (<div className="container my-4">
      <div>
        <label>Enter the name for Basket: &nbsp;</label>
        <input type="text" />
      </div> 
      <button type="button" className="btn btn-success" onClick={handleClick}>
        Save
      </button>  
      <div>
      <Link href='./dashboard' className="float-end"><button className="btn btn-outline-primary">Back to Dashboard</button></Link>
      </div>
    </div>)
    : (
      <div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='../auth/login'>login</Link></p>
      </div>
    )
  );
};

export default SaveBasket;