import React from "react";
import Header from "./Header";
import { useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();
  return (
    <>
      <Header />
      <div className="w-11/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Creation Date</th>
              </tr>
            </thead>
            <tbody>
             {
                users.map(user =>
                    <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    </tr>
                )
             }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
