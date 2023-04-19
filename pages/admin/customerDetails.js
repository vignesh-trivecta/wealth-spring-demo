import Link from "next/link";
import { useSelector } from "react-redux";

const CustomerDetails = () => {

    const loggedIn = useSelector((state) => state.auth.loggedIn);

    return(
        loggedIn ? (<div className="container">
            <h3>Customer Details</h3>

            {/* Customer Details table */}
            <table className="table table-hover table-bordered border-dark fs-5 mt-5">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vinod</td>
                        <td>Kumar</td>
                        <td>vinod12@gmail.com</td>
                        <td>9876543210</td>
                        <td>
                            <Link href="/customer/Vinod">
                                <button className="btn btn-outline-primary">Create</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Meera</td>
                        <td>Velu</td>
                        <td>meera@gmail.com</td>
                        <td>9856326985</td>
                        <td>
                            <Link href="/customer/Meera">
                                <button className="btn btn-outline-primary">Create</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Veera</td>
                        <td>Vel</td>
                        <td>veeragg@gmail.com</td>
                        <td>7964852348</td>
                        <td>
                            <Link href="/customer/Veera">
                                <button className="btn btn-outline-primary">Create</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Shriram</td>
                        <td>Kumar</td>
                        <td>shrirams@gmail.com</td>
                        <td>9856327981</td>
                        <td>
                            <Link href="/customer/Shriram">
                                <button className="btn btn-outline-primary">Create</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Kumar</td>
                        <td>Vel</td>
                        <td>kumarvv@gmail.com</td>
                        <td>8796579816</td>
                        <td>
                            <Link href="/customer/Kumar">
                                <button className="btn btn-outline-primary">Create</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Baskar</td>
                        <td>Shiva</td>
                        <td>baskivek@gmail.com</td>
                        <td>9742836754</td>
                        <td>
                            <Link href="/customer/Baskar">
                                <button className="btn btn-outline-primary">Create</button>
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

            <Link href='./dashboard' className="float-end"><button className="btn btn-primary btn-lg">Back to Dashboard</button></Link>
        
        </div>)
        : (<div className="d-flex row container m-5">
            <p>No authorized Access</p>
            <p>Please <Link href='../auth/login'>login</Link></p>
          </div>
        )
    );
};

export default CustomerDetails;