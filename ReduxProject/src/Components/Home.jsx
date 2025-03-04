import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../features/Crudslice";
import { Link, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch users on component mount
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Would you like to delete?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleEdit = (user) => {
    navigate("/Update",{replace:true,state:user})
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/Create" className="btn btn-success">
            Add+
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/Read/${user.id}`} className="btn btn-primary me-2">
                    Read
                  </Link>
                  <button
                    className="btn btn-warning me-2"
                    onClick={()=>handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

