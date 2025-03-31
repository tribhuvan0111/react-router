import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Create New Post</h3>
        <form>
          <div className="form-floating">
            <input type="text" className="form-control" placeholder="Leave a comment here"/>
            <label htmlFor="floatingTextarea">Title</label>
          </div>
          <div className="form-floating mt-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"style={{ height: "100px" }}></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
