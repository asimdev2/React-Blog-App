import React from "react";

export default function CreateFile() {
  let formdata = new FormData();

  // formdata.append('name','ali')
  console.log(formdata);
  function post(e) {
    e.preventDefault();
    fetch("http://localhost:3000/filedata", {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      body: formdata,
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          post(e);
        }}
      >
        <input name="username" type="text" />
        <input
          name="profile"
          type="file"
          onChange={(e) => {
            formdata.append("profile", e.target.files[0]);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
