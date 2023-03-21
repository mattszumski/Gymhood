import { useState } from "react";
import { Modal } from "../../../components/styled/Modal.styled";
import { Overlay } from "../../../components/styled/Overlay.styled";
import UploadPicture from "../../fileHandling/UploadPicture";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const UploadPhotoModal = ({ closeFn }) => {
  const axiosPrivate = useAxiosPrivate();
  const [files, setFiles] = useState([]);

  const handleUpload = () => {
    const formData = new FormData();
    files.forEach((val) => {
      formData.append("files", val, val.name);
    });

    axiosPrivate
      .post("/user/profile/picture/", formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((result) => {
        closeFn();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Overlay onClick={closeFn} />
      <Modal>
        <h3>Upload Profile photo</h3>
        <UploadPicture files={files} setFiles={setFiles} multiple={false} />
        <button disabled={files.length == 0} onClick={handleUpload}>
          Change Profile Picture
        </button>
      </Modal>
    </>
  );
};

export default UploadPhotoModal;
