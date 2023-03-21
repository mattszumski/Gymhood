import { useState } from "react";
import ReactDom from "react-dom";
import addIcon from "../assets/add_a_photo.svg";
import UploadPhotoModal from "./UploadPhotoModal";

const ChooseProfilePhoto = () => {
  const [isOpen, setIsOpen] = useState(false);

  // send request to add new post and refresh the dashboard for user
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <UploadPhotoModal closeFn={closeModal} />}
      <img src={addIcon} width="20px" onClick={openModal} />
    </>
  );
};

export default ChooseProfilePhoto;
