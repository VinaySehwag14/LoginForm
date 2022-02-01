import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./tabTwo.css";

const TabTwo = () => {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      try {
        const res = await axios.get(`/users`);
        console.log(res.data);

        setUserData(res.data);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    setIsLoading(false);
  }, []);

  const dataDelete = async (id) => {
    try {
      const res = await axios.delete(`${id}`);
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dataDelete();
  }, []);

  if (isLoading) {
    return <section className="sec">Loading...</section>;
  }

  if (userData.length === 0) {
    return <section className="sec">No data found</section>;
  }

  return (
    <div className="Datatable">
      <table>
        <tr>
          <th>username</th>
          <th>Mobile No</th>
          <th>Email</th>
          <th>Address</th>
          <th>Button</th>
        </tr>
        {userData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.username}</td>
              <td>{val.mobile}</td>
              <td>{val.email}</td>
              <td>{val.address}</td>
              <td>
                <button onClick={dataDelete}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TabTwo;
