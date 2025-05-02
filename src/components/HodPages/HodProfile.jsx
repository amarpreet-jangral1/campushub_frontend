// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import ApiServices from "../ApiServices";
// import { Link } from "react-router-dom";

// export default function HodProfile() {
//   var [profiledata, setProfiledata] = useState([])

//   const getData = () => {
//     ApiServices.hodProfile()
//       .then((res) => {
//         setProfiledata(res.data.data)
//       })
//       .catch((err) => {
//         console.log("error is", err);
//       })
//   }

//   useEffect(() => {
//     getData()
//   }, [])


//   return (
//     <>
//       {/* HOD Profile Section Start */}
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h6 className="section-title bg-white text-center text-primary px-3">
//               HOD Profile
//             </h6>
//             <h1 className="mb-4">Head of Department</h1>
//           </div>

//           <div className="row align-items-center g-5">
//             <div className="col-md-4 pb-5 d-flex justify-content-center">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 style={{
//                   borderRadius: "1.5rem",
//                   overflow: "hidden",
//                   boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
//                   width: "250px",
//                   height: "350px",
//                 }}
//               >
//                 <img
//                   src={profiledata?.image}
//                   alt="HOD"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               </motion.div>
//             </div>
//             <div className="col-lg-8">
//               <h3 className="mb-3">{profiledata?.name} </h3>
//               <p><strong>Department:</strong> {profiledata?.departmentId?.dept_name}</p>
//               <p><strong>Email:</strong> {profiledata?.email}</p>
//               <p><strong>Phone:</strong> {profiledata?.contact}</p>
//               <p><strong>Qualification:</strong> {profiledata?.qualification}</p>
//               <p><strong>Address:</strong> {profiledata?.address}</p>



//               {/* new  my code */}
//               <div className="d-flex gap-3 mt-3">
//                 <Link to="/login" className="btn btn-primary px-4 py-2">
//                   Update Profile
//                 </Link>
//                 <Link to="/hod/changepassword" className="btn btn-warning px-4 py-2">
//                   Change Password
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* HOD Profile Section End */}
//     </>
//   )
// }





import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";

export default function HodProfile() {
  const [profiledata, setProfiledata] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    department: "",
    email: "",
    contact: "",
    qualification: "",
    address: "",
  });

  const getData = () => {
    ApiServices.hodProfile()
      .then((res) => {
        setProfiledata(res.data.data);
        setUpdatedData({
          name: res.data.data.name || "",
          department: res.data.data.departmentId?.dept_name || "",
          email: res.data.data.email || "",
          contact: res.data.data.contact || "",
          qualification: res.data.data.qualification || "",
          address: res.data.data.address || "",
        });
      })
      .catch((err) => {
        console.log("error is", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedProfileData = {
      _id: profiledata._id,
      name: updatedData.name,
      email: updatedData.email,
      contact: updatedData.contact,
      qualification: updatedData.qualification,
      address: updatedData.address,
      // You may also need to send department ID if backend requires it
    };

    ApiServices.updateHod(updatedProfileData)
      .then((res) => {
        if (res.data.success) {
          setProfiledata((prev) => ({
            ...prev,
            ...updatedProfileData,
          }));
          setShowModal(false);
        } else {
          alert("Update failed!");
        }
      })
      .catch((err) => {
        console.error("Update error", err);
      });
  };

  return (
    <>
      {/* HOD Profile Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title bg-white text-center text-primary px-3">
              HOD Profile
            </h6>
            <h1 className="mb-4">Head of Department</h1>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-md-4 pb-5 d-flex justify-content-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  width: "250px",
                  height: "350px",
                }}
              >
                <img
                  src={profiledata?.image}
                  alt="HOD"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-3">{profiledata?.name}</h3>
              <p><strong>Department:</strong> {profiledata?.departmentId?.dept_name}</p>
              <p><strong>Email:</strong> {profiledata?.email}</p>
              <p><strong>Phone:</strong> {profiledata?.contact}</p>
              <p><strong>Qualification:</strong> {profiledata?.qualification}</p>
              <p><strong>Address:</strong> {profiledata?.address}</p>

              <div className="d-flex gap-3 mt-3">
                <button
                  className="btn btn-primary px-4 py-2"a
                  onClick={() => setShowModal(true)}
                >
                  Update Profile
                </button>
                <Link to="/hod/changepassword" className="btn btn-warning px-4 py-2">
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">Update Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={updatedData.name} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={updatedData.email} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label>Contact</label>
                    <input type="text" name="contact" className="form-control" value={updatedData.contact} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label>Qualification</label>
                    <input type="text" name="qualification" className="form-control" value={updatedData.qualification} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" value={updatedData.address} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-success">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* HOD Profile Section End */}
    </>
  );
}
