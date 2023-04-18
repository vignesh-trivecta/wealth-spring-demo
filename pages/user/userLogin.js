import Link from "next/link";

const userLogin = () => {
    return(
        // OTP based login page
        <div className="container text-center my-5">
            <div>
                <label>Enter OTP: &nbsp;</label>
                <input type='text' />
            </div>
            <div className="m-4">
                <Link href="/user/userBasket"><button type="submit" className="btn btn-success m-2">Verify</button></Link>
                <button type="submit" className="btn btn-outline-primary m-2">Resend OTP</button>
            </div>
        </div>
    )
}

export default userLogin;