import Head from "next/head";
import Link from "next/link";

function Dashboard() {
    return (
      <div>
        {/* Page Name */}
        <Head>
          <title>Wealth Spring | Admin Dashboard</title>
          <meta property="og:title" content="Wealth Spring | Admin Dashboard" key="title" />
        </Head>

        {/* Dashboard */}
        <div className="text-center">
            <h1>Overview</h1>
            <p>Total Number of Customer Transaction: 100</p>
            <p>Total Number of Customer Orders Executed: 110</p>
            <p>Total Value of Orders: 200000</p>
            <Link href='./createBasket'>
                <button className="btn btn-primary">Create a Basket</button>
            </Link>
            &nbsp;
            <button className="btn btn-primary">Map Basket to Customer</button>
        </div>
      </div>
    );
}

export default Dashboard;