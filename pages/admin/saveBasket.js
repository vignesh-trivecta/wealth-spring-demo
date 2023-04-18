import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import Link from 'next/link';

const SaveBasket = () => {
    
  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleClick = () => {
    alert('Basket created successfully!');
    router.push('/admin/dashboard');
    };

  return (
    loggedIn ?
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