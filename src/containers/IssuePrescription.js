import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DocLayout from "../containers/DocLayout";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);
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
    previewImage: "",
    previewTitle: "",
    fileList: [
      {
        uid: "-1",
        name: "prescription",
        status: "done",
        url: "https://pin.it/52yuVuW",
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
      <DocLayout>
        <div className="margin-top w-100 text-center mb-3 ">
          {" "}
          <Search
            placeholder="Enter Patient ID/ Name"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
            <tr>
              <th className="text-center">Patient ID</th>
              <th className="text-center">Name</th>

              <th className="text-center">Address</th>
              <th className="text-center">Contact</th>

              <th className="text-center">Prescription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">83</td>
              <td className="text-center">Vaishali Buttan</td>
              <td className="text-center"> 123 Norwich Road</td>
              <td className="text-center"> 78459374628</td>
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
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </td>
            </tr>
          </tbody>
        </table>
      </DocLayout>
    );
  }
}

export default PicturesWall;
