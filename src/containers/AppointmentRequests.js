import React from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";
import CIcon from "@coreui/icons-react";
import { Button } from "antd";
import DocLayout from "../containers/DocLayout";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";
const Appointments = () => {
  return (
    <DocLayout>
      <div className="w-100 text-center mb-3 ">
        <Space direction="vertical" size={12}>
          <DatePicker
            defaultValue={moment("2015/01/01", dateFormat)}
            format={dateFormat}
          />
        </Space>
      </div>

      <table className="table table-hover table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th>Patient's Name</th>
            <th className="text-center">Location Requested</th>

            <th className="text-center">Time Slot </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>Kunwar Gangesh Singh</div>
              <div className="small text-muted">
                <span>New</span> | Registered: May 13 , 2021
              </div>
            </td>
            <td className="text-center">Clinic-2</td>
            <td className="text-center"> 10:00-11:00</td>
            <td className="text-center">
              <Button type="text"> Patient Details</Button>
              <Button type="primary" success>
                {" "}
                Accept
              </Button>
              <Button type="primary" danger>
                {" "}
                Decline
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div>Barney Stinson</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Apr 26 , 2021
              </div>
            </td>
            <td className="text-center">Clinic-2</td>
            <td className="text-center"> 14:00-15:00</td>
            <td className="text-center">
              <Button type="text"> Patient Details</Button>
              <Button type="primary" success>
                {" "}
                Accept
              </Button>
              <Button type="primary" danger>
                {" "}
                Decline
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div>Ted Mosby</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Aug 1 , 2021
              </div>
            </td>
            <td className="text-center">Clinic-1</td>
            <td className="text-center"> 12:00-12:30</td>
            <td className="text-center">
              <Button type="text"> Patient Details</Button>
              <Button type="primary" success>
                {" "}
                Accept
              </Button>
              <Button type="primary" danger>
                {" "}
                Decline
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div>Lily Melega</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Dec 3 , 2021
              </div>
            </td>
            <td className="text-center">Clinic-2</td>
            <td className="text-center"> 11:00-12:00</td>
            <td className="text-center">
              <Button type="text"> Patient Details</Button>
              <Button type="primary" success>
                {" "}
                Accept
              </Button>
              <Button type="primary" danger>
                {" "}
                Decline
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div>Marshal Erikson</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jun 30 , 2021
              </div>
            </td>
            <td className="text-center">Clinic-1</td>
            <td className="text-center"> 18:00-19:00</td>
            <td className="text-center">
              <Button type="text"> Patient Details</Button>
              <Button type="primary" success>
                {" "}
                Accept
              </Button>
              <Button type="primary" danger>
                {" "}
                Decline
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div>Robin Schbasky</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jan 17, 2021
              </div>
            </td>
            <td className="text-center">Clinic-2</td>
            <td className="text-center"> 15:00-15:30</td>
            <td className="text-center">
              <Button type="text"> Patient Details</Button>
              <Button type="primary" success>
                {" "}
                Accept
              </Button>
              <Button type="primary" danger>
                {" "}
                Decline
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </DocLayout>
  );
};

export default Appointments;
