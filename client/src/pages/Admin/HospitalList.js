import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";

const HospitalList = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({
    hospitalName: "",
    email: "",
    phone: "",
  });

  const getHospitals = async () => {
    try {
      const { data } = await API.get("/admin/hospital-list");
      if (data?.success) {
        setData(data?.hospitalData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (record) => {
    setEditingId(record._id);
    setEditedData({
      hospitalName: record.hospitalName,
      email: record.email,
      phone: record.phone,
    });
  };

  const handleSave = async () => {
    try {
      const { data } = await API.put(`/admin/update-hospital/${editingId}`, {
        ...editedData,
      });
      alert(data?.message);
      setEditingId(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelete = async (id) => {
    try {
      let answer = window.prompt(
        "Are You Sure Want To Delete This Hospital",
        "Sure"
      );
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-hospital/${id}`);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>
                {editingId === record._id ? (
                  <input
                    type="text"
                    value={editedData.hospitalName}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        hospitalName: e.target.value,
                      })
                    }
                  />
                ) : (
                  record.hospitalName
                )}
              </td>
              <td>
                {editingId === record._id ? (
                  <input
                    type="text"
                    value={editedData.email}
                    onChange={(e) =>
                      setEditedData({ ...editedData, email: e.target.value })
                    }
                  />
                ) : (
                  record.email
                )}
              </td>
              <td>
                {editingId === record._id ? (
                  <input
                    type="text"
                    value={editedData.phone}
                    onChange={(e) =>
                      setEditedData({ ...editedData, phone: e.target.value })
                    }
                  />
                ) : (
                  record.phone
                )}
              </td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td>
                {editingId === record._id ? (
                  <button className="btn btn-success" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(record)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handelDelete(record._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default HospitalList;
