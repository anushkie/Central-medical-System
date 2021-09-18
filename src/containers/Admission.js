import React from "react";
import UserLayout from "../containers/UserLayout";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CCollapse,
} from "@coreui/react";

const Admission = () => {
  return (
    <UserLayout>
      <CCard>
        <CCardHeader>Admission History</CCardHeader>
        <CCardBody>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center">S.no</th>
                <th className="text-center">Date</th>

                <th className="text-center"> Doctor's Name</th>
                <th className="text-center">Address</th>
                <th className="text-center">Contact</th>
                <th className="text-center">Prescription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">20/09/2021</td>
                <td className="text-center">Vaishali Buttan</td>
                <td className="text-center"> 123 Norwich Road</td>
                <td className="text-center"> 78459374628</td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </UserLayout>
  );
};

export default Admission;
