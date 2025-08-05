import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [description, setDescription] = useState("");
  //   let [blogdata, setBlogData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`http://localhost:3000/blogs/${id}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw `error while requesting ${response.status}`;
        }

        let data = await response.json();
        console.log("printed data", data);
        setTitle(data.title);
        setAuthor(data.author);
        setDescription(data.description);
      } catch (err) {
        setError(err);
        console.log("Printed Error", error);
      }
    }
    fetchData();
  }, [id]);

  async function handleChange(e) {
    e.preventDefault();

    await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, author, description }),
    });

    navigate("/");
  }

  return (
    <>
      <div className="container my-5 min-vh-100">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header bg-dark text-light text-center">
                <h5>Write your own Blog</h5>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => handleChange(e)}>
                  <label htmlFor="title" className=" text fw-bold fs-5">
                    Title:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Blog title"
                    className="my-2 form-control"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <label htmlFor="title" className=" text fw-bold fs-5">
                    Author Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter blog Author"
                    className="my-2 form-control"
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.value);
                    }}
                  />
                  <label htmlFor="title" className=" text fw-bold fs-5">
                    Description:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter blog description"
                    value={description}
                    className="my-2 form-control"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />

                  <input
                    type="submit"
                    value="Update Blog"
                    className="btn btn-success w-100 my-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
