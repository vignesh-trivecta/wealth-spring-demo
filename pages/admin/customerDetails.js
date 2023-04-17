import Link from "next/link";
import { useSelector } from "react-redux";

function CustomerDetails() {

    const loggedIn = useSelector((state) => state.auth.loggedIn);

    return(
        loggedIn ? (<div className="container">
            <h1>Customer Details</h1>

            {/* Customer Details table */}
            <table className="table">
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
                        <td><button className="btn btn-outline-primary">Create</button></td>
                    </tr>
                    <tr>
                        <td>Meera</td>
                        <td>Velu</td>
                        <td>meera@gmail.com</td>
                        <td>9856326985</td>
                        <td><button className="btn btn-outline-primary">Create</button></td>
                    </tr>
                    <tr>
                        <td>Veera</td>
                        <td>Vel</td>
                        <td>veeragg@gmail.com</td>
                        <td>7964852348</td>
                        <td><button className="btn btn-outline-primary">Create</button></td>
                    </tr>
                    <tr>
                        <td>Shriram</td>
                        <td>Kumar</td>
                        <td>shrirams@gmail.com</td>
                        <td>9856327981</td>
                        <td><button className="btn btn-outline-primary">Create</button></td>
                    </tr>
                    <tr>
                        <td>Kumar</td>
                        <td>Vel</td>
                        <td>kumarvv@gmail.com</td>
                        <td>8796579816</td>
                        <td><button className="btn btn-outline-primary">Create</button></td>
                    </tr>
                    <tr>
                        <td>Baskar</td>
                        <td>Shiva</td>
                        <td>baskivek@gmail.com</td>
                        <td>9742836754</td>
                        <td><button className="btn btn-outline-primary">Create</button></td>
                    </tr>
                </tbody>
            </table>

            <Link href='./dashboard' className="float-end"><button className="btn btn-primary">Back to Dashboard</button></Link>
        
        </div>)
        : (<div className="d-flex row container m-5">
            <p>No authorized Access</p>
            <p>Please <Link href='../auth/login'>login</Link></p>
          </div>
        )
    );
};

export default CustomerDetails;