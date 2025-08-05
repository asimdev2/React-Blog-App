import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  // let data = ""
  const nav = useNavigate();

  const [data, setData] = useState({});

  console.log(data);

  async function postBlog(e) {
    e.preventDefault();
    await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Blog Created Successfully");
    nav("/");
  }

  return (
    <div
      className="container my-5 "
      style={{ fontFamily: "serif", fontSize: "20px" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div
              className="card-header bg-dark text-light text-center "
              style={{ fontFamily: "serif" }}
            >
              <h5>Write Your own Blog</h5>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  postBlog(e);
                }}
              >
                <input
                  type="text"
                  placeholder="Enter Blog Title"
                  className="my-2 form-control "
                  onChange={(e) => {
                    setData({ title: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Blog Author"
                  className="my-2 form-control "
                  onChange={(e) => {
                    setData({ ...data, author: e.target.value });
                  }}
                />
                <textarea
                  type="text"
                  rows={10}
                  placeholder="Enter Blog Description"
                  className="my-2 form-control "
                  onChange={(e) => {
                    setData({ ...data, description: e.target.value });
                  }}
                />
                <input
                  style={{ fontFamily: "serif" }}
                  type="submit"
                  value="Create Blog"
                  className="btn btn-success w-100 my-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
