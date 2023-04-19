import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Basket = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const router = useRouter();
  const { id } = router.query;


  return (
    loggedIn 
    ? (<div className="container">

      {/* User Basket */}
      <h3 className="text-center m-3 fw-bold">{id}'s Basket</h3>

      {/* Investment row */}
      <h4 className="">Investment</h4>
      <div className="d-flex justify-content-between mb-5">
        <div className="input-group w-50 me-5">
          <span className="input-group-text" id="inputGroup-sizing-default">Enter Investment Amount</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="d-none d-xl-inline ms-5 me-5">&nbsp;</div>
        <div className="d-none d-lg-inline ms-5 me-5">&nbsp;</div>
        <div className="d-none d-lg-inline ms-5">&nbsp;</div>
        <div className="input-group input-group-default w-50 ms-5">
          <label className="input-group-text" for="inputGroupSelect01">Choose /Create Basket</label>
          <select className="form-select" id="inputGroupSelect01">
            <option value="1">Basket 1</option>
            <option value="2">Basket 2</option>
            <option value="3">Basket 3</option>
            <option value="3">New Basket</option>
          </select>
        </div>
      </div>

      {/* Orders Row */}
      <h4>Order Analysis</h4>
      
      {/* Orders Table */}
      <div>
        <table className="table table-hover table-bordered border-dark fs-6">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Constituents</th>
              <th scope="col">Current Price &#8377;</th>
              <th scope="col">Weights %</th>
              <th scope="col">Quantity</th>
              <th scope="col">Order Type</th>
            </tr>
          </thead>
          <tbody>

            {/* table 1 */}
            <tr>
              <th scope="row">1</th>
              <td>
                <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>2828.40</td>
              <td>12.34</td>
              <td className="">
                <div>
                <input type="text" className="form-control w-25" />  
                </div>
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 2 */}
            <tr>
            <th scope="row">2</th>
              <td>
                <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option selected value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>2356.35</td>
              <td>6.80</td>
              <td className="">
                <div>
                <input type="text" className="form-control w-25" />  
                </div>
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Buy</option>
                    <option selected value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 3 */}
            <tr>
            <th scope="row">3</th>
              <td>
                <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option selected value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>365.20</td>
              <td>32.7</td>
              <td className="">
                <div>
                <input type="text" className="form-control w-25" />  
                </div>
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 4 */}
            <tr>
            <th scope="row">4</th>
              <td>
                <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option selected value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>170.00</td>
              <td>32.7</td>
              <td className="">
                <div>
                <input type="text" className="form-control w-25" />  
                </div>
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 5 */}
            <tr>
            <th scope="row">5</th>
              <td>
                <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option selected value="5">Indigo Paints</option>
                  </select>
                </div>
              </td>
              <td>1072.85</td>
              <td>7.51</td>
              <td className="">
                <div>
                <input type="text" className="form-control w-25" />  
                </div>
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Buy</option>
                    <option selected value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 6 */}
            <tr>
            <th scope="row">6</th>
              <td>
                <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option selected value="6">Akzo Nobel</option>
                  </select>
                </div>
              </td>
              <td>2324.65</td>
              <td>6.56</td>
              <td className="">
                <div>
                <input type="text" className="form-control w-25" />  
                </div>
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Buy</option>
                    <option selected value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option selected value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>59.70</td>
              <td>24.3</td>
              <td className="">
                <div>
                <input type="text" className="form-control w-25" />  
                </div>
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-6">
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="d-flex align-items-center ">
          <h4>Total Investment:</h4>
          <h4 className=" ms-3">9117</h4>
      </div>
    </div>)

    : (<div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='../auth/login'>login</Link></p>
      </div>
    )
  );
};

export default Basket;