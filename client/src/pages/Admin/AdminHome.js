import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            🩸
            Blood donation is a voluntary procedure that can help save lives. Donated blood is used for surgeries, trauma care, cancer treatment, chronic illnesses, and more. A single donation can save up to three lives. The process is safe, quick, and generally takes less than an hour.

            At our Blood Bank, we ensure:

            Safe and hygienic procedures

            Proper donor screening

            Blood testing for diseases

            Quick recovery and refreshments post-donation

            We welcome healthy individuals aged 18–65 years to donate. Every drop counts—be a hero, donate blood, and help save lives.
          </p>
        </div>
        <div className="col-sm-6" align="center" style={{ fontSize: '1.5rem' }}>
          <table className="table table-responsive">
            <tbody>
              <tr>
                <th colSpan="3" style={{ color: 'white', backgroundColor: 'red' }}>
                  Compatible Blood Type Donors
                </th>
              </tr>
              <tr>
                <td><b>Blood Type</b></td>
                <td><b>Donate Blood To</b></td>
                <td><b>Receive Blood From</b></td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>A+</b></span></td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>O+</b></span></td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>B+</b></span></td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>AB+</b></span></td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>A-</b></span></td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>O-</b></span></td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>B-</b></span></td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td><span style={{ color: '#961e1b' }}><b>AB-</b></span></td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </Layout>
  );
};

export default AdminHome;
