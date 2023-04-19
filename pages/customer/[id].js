import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Basket = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const router = useRouter();
  const { id } = router.query;
  const selectedBasket = useSelector((state) => state.basket.selectedBasket)

  return (
    loggedIn 
    ? (<div className="container">

      {/* User Basket */}
      <h3 className="text-center m-3 fw-bold">{id}'s Basket</h3>

      {/* Investment row */}
      <h4>Investment</h4>
      <div className="d-flex justify-content-between mb-5">
        <div className="input-group w-25 me-5">
          <span className="input-group-text" id="inputGroup-sizing-default">Investment Amount</span>
          <input type="text" value="3,00,000" className="form-control bg-light" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled readonly />
        </div>
        <div className="d-none d-xl-inline ms-5 me-5">&nbsp;</div>
        <div className="d-none d-lg-inline ms-5 me-5">&nbsp;</div>
        <div className="d-none d-lg-inline ms-5">&nbsp;</div>
        <div className="input-group input-group-default w-25 ms-5">
        <span className="input-group-text" id="inputGroup-sizing-default">Selected Basket</span>
          <input type="text" value={`Basket ${selectedBasket}`} className="form-control bg-light" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled readonly />
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
                Asian Paints Ltd
              </td>
              <td>2828.40</td>
              <td>12.34</td>
              <td>
                30
              </td>
              <td>
                Buy
              </td>
            </tr>

            {/* table 2 */}
            <tr>
            <th scope="row">2</th>
              <td>
                Reliance Industries Ltd
              </td>
              <td>2356.35</td>
              <td>6.80</td>
              <td>
                50
              </td>
              <td>
                Sell
              </td>
            </tr>

            {/* table 3 */}
            <tr>
            <th scope="row">3</th>
              <td>
                La Opala RG Ltd
              </td>
              <td>365.20</td>
              <td>32.7</td>
              <td>
                20
              </td>
              <td>
                Buy
              </td>
            </tr>

            {/* table 4 */}
            <tr>
            <th scope="row">4</th>
              <td>
                Reddington India Ltd
              </td>
              <td>170.00</td>
              <td>32.7</td>
              <td>
                100
              </td>
              <td>
                Buy
              </td>
            </tr>

            {/* table 5 */}
            <tr>
            <th scope="row">5</th>
              <td>
                Indigo Paints
              </td>
              <td>1072.85</td>
              <td>7.51</td>
              <td>
                25
              </td>
              <td>
                Sell
              </td>
            </tr>

            {/* table 6 */}
            <tr>
            <th scope="row">6</th>
              <td>
                Akzo Nobel
              </td>
              <td>2324.65</td>
              <td>6.56</td>
              <td>
                15
              </td>
              <td>
                Sell
              </td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                BPL limited
              </td>
              <td>59.70</td>
              <td>24.3</td>
              <td>
                40
              </td>
              <td>
                Buy
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="d-flex align-items-center ">
          <h4>Total Investment:</h4>
          <h4 className=" ms-3">
            <input class="form-control w-50 fw-semibold" type="text" value="2,91,052.5" aria-label="Disabled input example" disabled readonly />
          </h4>
      </div>

      <div className="d-flex justify-content-between">
        <Link href="/admin/customerDetails"><button type="button" class="btn btn-outline-primary btn-lg mb-5">Back</button></Link>
        <button type="button" class="btn btn-success btn-lg float-end mb-5">Send as Weblink</button>
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