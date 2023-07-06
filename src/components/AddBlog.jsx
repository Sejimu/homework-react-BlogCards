import React from "react";

function AddBlog() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      AddBlog <button className="btn btn-primary">click me</button>
    </form>
  );
}

export default AddBlog;
