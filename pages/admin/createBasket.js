import Link from "next/link";
import { useSelector } from "react-redux";

function CreateBasket() {

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    loggedIn 
    ? (<div className="container">

      {/* User Basket */}
      <h1 className="text-center">Create Basket</h1>

      {/* Investment row */}
      <h4>Investment</h4>
      <div className="d-flex justify-content-around">
        <div>
          <label>Enter Investment Amount:&nbsp;</label>
          <input type="text" />
        </div>
        <div className="dropdown">
          <label>Choose Basket/ Create New Basket:&nbsp;</label>
          <select>
            <option value="1">Basket 1</option>
            <option value="2">Basket 2</option>
            <option value="3">Basket 3</option>
            <option value="4">Basket 4</option>
            <option value="5">Basket 5</option>
            <option value="6">Create New Basket</option>
          </select>
        </div>
      </div>

      {/* Orders Row */}
      <h4>Order Analysis</h4>
      
      {/* Orders Table */}
      <div>
        <table className="table">
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

      <div className="d-flex align-items-center">
          <h4>Total Investment</h4>
          <p className="mx-5 pt-3">23000</p>
      </div>

      {/* Button group */}
      <div className="d-flex justify-content-center align-items-center">
        <Link href='./saveBasket'>
          <button className="mx-2 btn btn-success">Save</button>
        </Link>
        <button className="mx-2 btn btn-primary">Map to Customer</button>
      </div>
      
      <Link href='./dashboard' className="float-end"><button className="btn btn-outline-primary">Back to Dashboard</button></Link>
    </div>)

    : (<div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='../auth/login'>login</Link></p>
      </div>
    )
  );
};

export default CreateBasket;