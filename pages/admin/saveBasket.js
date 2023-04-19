import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import Link from 'next/link';

const SaveBasket = () => {
    
  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleClick = () => {
    alert('Basket created successfully!');
    router.push('/admin/createBasket');
    };

  return (
    loggedIn ?
    (<div className="container my-4">
      <h4 className='fw-bold'>Save your Basket</h4>
      <div className='fs-5 mb-3'>
        <label>Enter the name for Basket: &nbsp;</label>
        <input type="text" />
      </div> 
      <div className='d-flex'>
        <Link href='./dashboard' className="float-end"><button className="btn btn-outline-primary btn-lg">Back to Dashboard</button></Link>
        <div className='ms-5'>
        <button type="button" className="btn btn-success btn-lg ms-5" onClick={handleClick}>
          Save
        </button>
        </div>  
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