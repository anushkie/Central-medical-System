import React from "react";
import UserLayout from "../containers/UserLayout";
import { CCard, CCardBody } from "@coreui/react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage:
      "https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png",
    previewTitle: "",
    fileList: [
      {
        uid: "-1",
        name: "prescription",
        status: "done",
        url: "https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png",
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <UserLayout>
        <CCard>
          <CCardBody>
            <table className="margin-top table table-outline mb-0 d-none d-sm-table">
              <thead className="">
                <tr>
                  <th className="text-center">S.no</th>
                  <th className="text-center">
                    {/* <FontAwesomeIcon icon={faCalendar} /> */}
                    Date
                  </th>

                  <th className="text-center">
                    {" "}
                    {/* <FontAwesomeIcon icon={faUserMd} /> */}
                    Doctor's Name
                  </th>
                  <th className="text-center">
                    {/* <FontAwesomeIcon icon={faMapPin} /> */}
                    Address
                  </th>
                  <th className="text-center">
                    {/* <FontAwesomeIcon icon={faAddressBook} /> */}
                    Contact
                  </th>
                  <th className="text-center">
                    {/* <FontAwesomeIcon icon={faPrescription} /> */}
                    Prescription
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td className="text-center">20/09/2021</td>
                  <td className="text-center">Michael Blaire</td>
                  <td className="text-center"> 12/32 Magadelan street</td>
                  <td className="text-center"> 07863542345</td>
                  <td className="text-center">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      title={previewTitle}
                      footer={null}
                      onCancel={this.handleCancel}
                    >
                      <img
                        alt="prescription"
                        style={{ width: "100%" }}
                        src={
                          "https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png"
                        }
                      />
                    </Modal>
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </UserLayout>
    );
  }
}

export default PicturesWall;
