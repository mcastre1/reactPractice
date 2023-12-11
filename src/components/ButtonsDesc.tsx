export function ButtonsDesc() {
  return (
    <>
      <div className="container-fluid w-100">
        <div className="row m-2">
          <h4 className="col-sm">Support</h4>
          <button className="col-sm btn btn-primary">Create Ticket</button>
        </div>
        <div className="row m-2">
          <h4 className="col-sm">Demo Data</h4>
          <button className="col-sm btn btn-primary">Remove Data</button>
        </div>
      </div>
      <div className="container-fluid w-100">
        <div className="row m-1">
          <a href="#" className="col-sm-4">
            Contact Us
          </a>
          <a href="#" className="col-sm-8">
            Blog
          </a>
        </div>
        <div className="row m-1">
          <a href="#" className="col-sm-4">
            Client Portal
          </a>
          <a href="#" className="col-sm-8">
            Youtube Channel
          </a>
        </div>
      </div>
    </>
  );
}
