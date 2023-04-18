import Link from "next/link";
import { useSelector } from "react-redux";

const CreateBasket = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    loggedIn 
    ? (<div className="container">

      {/* User Basket */}
      <h2 className="text-center m-3 fw-bold">Create Basket</h2>

      {/* Investment row */}
      <h4 className="">Investment</h4>
      <div className="d-flex justify-content-between mb-5">
        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-sm">Enter Investment Amount</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div class="input-group input-group-lg ms-3">
          <label class="input-group-text" for="inputGroupSelect01">Choose Basket/ Create New Basket</label>
          <select class="form-select" id="inputGroupSelect01">
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
        <table className="table table-hover table-bordered border-dark fs-5">
          <thead>
            <tr>
              <th>Constituents</th>
              <th>Current Price &#8377;</th>
              <th>Weights %</th>
              <th>Quantity</th>
              <th>Order Type</th>
            </tr>
          </thead>
          <tbody>

            {/* table 1 */}
            <tr>
              <td>
                <div className="dropdown">
                  <select class="form-select w-75 fs-5">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="3">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>2765.40</td>
              <td>12.34</td>
              <td>
              <input type="text" class="form-control w-25" />  
              </td>
              <td>
              <div className="dropdown">
                  <select className="form-select w-75 fs-5">
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 2 */}
            <tr>
              <td>
                <div className="dropdown">
                  <select>
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">BPL Limited</option>
                    <option value="6">Surana Solar Limited</option>
                  </select>
                </div>
              </td>
              <td>2765.40</td>
              <td>12.34</td>
              <td><input type='text' /></td>
              <td>
              <div className="dropdown">
                  <select>
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 3 */}
            <tr>
              <td>
                <div className="dropdown">
                  <select>
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">BPL Limited</option>
                    <option value="6">Surana Solar Limited</option>
                  </select>
                </div>
              </td>
              <td>2765.40</td>
              <td>12.34</td>
              <td><input type='text' /></td>
              <td>
              <div className="dropdown">
                  <select>
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 3 */}
            <tr>
              <td>
                <div className="dropdown">
                  <select>
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">BPL Limited</option>
                    <option value="6">Surana Solar Limited</option>
                  </select>
                </div>
              </td>
              <td>2765.40</td>
              <td>12.34</td>
              <td><input type='text' /></td>
              <td>
              <div className="dropdown">
                  <select>
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 4 */}
            <tr>
              <td>
                <div className="dropdown">
                  <select>
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">BPL Limited</option>
                    <option value="6">Surana Solar Limited</option>
                  </select>
                </div>
              </td>
              <td>2765.40</td>
              <td>12.34</td>
              <td><input type='text' /></td>
              <td>
              <div className="dropdown">
                  <select>
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 5 */}
            <tr>
              <td>
                <div className="dropdown">
                  <select>
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">BPL Limited</option>
                    <option value="6">Surana Solar Limited</option>
                  </select>
                </div>
              </td>
              <td>2765.40</td>
              <td>12.34</td>
              <td><input type='text' /></td>
              <td>
              <div className="dropdown">
                  <select>
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                  </select>
              </div>
              </td>
            </tr>

            {/* table 6 */}
            <tr>
              <td>
                <div className="dropdown">
                  <select>
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">BPL Limited</option>
                    <option value="6">Surana Solar Limited</option>
                  </select>
                </div>
              </td>
              <td>2765.40</td>
              <td>12.34</td>
              <td><input type='text' /></td>
              <td>
              <div className="dropdown">
                  <select>
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
          <h4 className=" ms-3">23000</h4>
      </div>

      {/* Button group */}
      <div className="d-flex justify-content-center align-items-center">
        <Link href='./saveBasket'>
          <button className="mx-2 btn btn-success btn-lg">Save</button>
        </Link>
        <button className="mx-2 btn btn-primary btn-lg">Map to Customer</button>
      </div>
      
      <Link href='./dashboard' className="float-end"><button className="btn btn-outline-primary btn-lg">Back to Dashboard</button></Link>
    </div>)

    : (<div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='../auth/login'>login</Link></p>
      </div>
    )
  );
};

export default CreateBasket;