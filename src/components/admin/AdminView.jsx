import React, { useEffect, useState } from "react";

export default function AdminView() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function blogfetch() {
      try {
        let response = await fetch("http://localhost:3000/blogs", {
          method: "GET",
        });
        if (!response.ok) {
          throw `New error ${response.status}`;
        }
        let data = await response.json();
        setBlogs(data);
        console.log("Data Of adminCreate", blogs);
      } catch (error) {
        console.log("Error of Admin Create: ", error);
      }
    }
    blogfetch();
  }, []);
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-md-10 ">
            {blogs.map((blog) => (
              <table className="table table-hover">
                <thead>
                  <tr className="table-dark fw-light font-monospace">
                    <th scope="col"># id</th>
                    <th scope="col">Blog Title</th>
                    <th scope="col">Blog Description</th>
                    <th scope="col">Blog Author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-info">
                    <th scope="row">{blog.id}</th>
                    <td>{blog.title}</td>
                    <td>{blog.description}</td>
                    <td>{blog.author}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
