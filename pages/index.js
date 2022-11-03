import Link from "next/link";

const Page = () => (
  <div className="container">
    <div className="row bg-dark p-2 text-white">
      <h1>QVoter</h1>
    </div>
    <div
      className="row d-flex align-items-center bg-light p-0"
      style={{ minHeight: "80vh" }}
    >
      <div className="col-3" />
      <div className="col-12 col-sm-6">
        <div className="text-center p-4" style={{ fontSize: "1.5em" }}>
          <a href = "https://en.wikipedia.org/wiki/Quadratic_voting">
            Quadratic Voting 
          </a>
          &nbsp;is a novel method of polling in which a user 
          can not only vote for and against an issue, but also to the degree
          for which they wish to express their support. 
        </div>
        <div>
          <Link href="/create">
            <button className="btn btn-dark btn-block">
              Create an Election
            </button>
          </Link>
        </div>
      </div>
      <div className="col-3" />
    </div>
  </div>
);

export default Page;
