import { useRouter } from 'next/router';

function SaveBasket(){
    
    const router = useRouter();

    const handleClick = () => {
        alert('Basket created successfully!');
        router.push('/admin/dashboard');
      };

    return (
      <div className="container-fluid my-4">
        <div>
          <label>Enter the name for Basket: &nbsp;</label>
          <input type="text" />
        </div> 
        <button type="button" className="btn btn-outline-success" onClick={handleClick}>
          Save
        </button>

        
      </div>
    );
}

export default SaveBasket;