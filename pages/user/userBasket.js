import Link from "next/link";
// import { userContext } from "../../contexts/useUserContext";
// import { useContext } from "react";

function UserBasket() {

  // const [loggedin, setLoggedIn] = useContext(userContext);

    return (
      // loggedin ?
      // (
      <div className="container">

        {/* Investment row */}
        <h4>Investment</h4>
        <div className="d-flex justify-content-around">
          <h4>User's Basket</h4>
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
                  <div>
                    Buy
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
                <div>
                  Sell
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

        {/* Buttons */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Check Validity of Advisory
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Alert!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Advisory is still valid
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href=''>
            <button className="mx-2 btn btn-outline-success">Confirm</button>
          </Link>
        </div>
        


      </div>
    //   )
    //   : (<div>No authorised Access</div>)
    );
}

export default UserBasket;