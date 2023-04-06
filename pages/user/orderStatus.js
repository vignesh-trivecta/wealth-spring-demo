import Link from "next/link";

function OrderProcessing() {
    return(
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <div>
                <span>Order Processing... &nbsp;</span>
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <p className="mt-4">Please wait while we process your order...</p>
            <p className="mt-2">Do not refresh or go back</p>
            <Link href='./orderSuccess'><button>Click me</button></Link>
        </div>
    )
}

export default OrderProcessing;