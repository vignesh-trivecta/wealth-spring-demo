import Link from "next/link";
import { useSelector } from "react-redux";

const CustomerDetails = () => {

    const loggedIn = useSelector((state) => state.auth.loggedIn);

    return(
        loggedIn ? (
        <div className="container">

            <h3>Customer Details</h3>

            {/* Customer Details table */}
            <table className="table table-hover table-bordered border-dark fs-6 mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Basket</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Vinod</td>
                        <td>Kumar</td>
                        <td>vinod12@gmail.com</td>
                        <td>9876543210</td>
                        <td className="text-center">
                            <Link href="/customer/Vinod">
                                <button className="btn btn-outline-primary">+</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Meera</td>
                        <td>Velu</td>
                        <td>meera@gmail.com</td>
                        <td>9856326985</td>
                        <td className="text-center">
                            <Link href="/customer/Meera">
                                <button className="btn btn-outline-primary">+</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Veera</td>
                        <td>Vel</td>
                        <td>veeragg@gmail.com</td>
                        <td>7964852348</td>
                        <td className="text-center">
                            <Link href="/customer/Veera">
                                <button className="btn btn-outline-primary">+</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Shriram</td>
                        <td>Kumar</td>
                        <td>shrirams@gmail.com</td>
                        <td>9856327981</td>
                        <td className="text-center">
                            <Link href="/customer/Shriram">
                                <button className="btn btn-outline-primary">+</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Kumar</td>
                        <td>Vel</td>
                        <td>kumarvv@gmail.com</td>
                        <td>8796579816</td>
                        <td className="text-center">
                            <Link href="/customer/Kumar">
                                <button className="btn btn-outline-primary">+</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Baskar</td>
                        <td>Shiva</td>
                        <td>baskivek@gmail.com</td>
                        <td>9742836754</td>
                        <td className="text-center">
                            <Link href="/customer/Baskar">
                                <button className="btn btn-outline-primary">+</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>

            <Link href='./createBasket' className="float-end"><button className="btn btn-outline-primary btn-lg">Back</button></Link>
        
        </div>)
        : (<div className="d-flex row container m-5">
            <p>No authorized Access</p>
            <p>Please <Link href='../auth/login'>login</Link></p>
          </div>
        )
    );
};

export default CustomerDetails;