import { useState } from "react";
import ImageViewModal from "./ImageViewModal";

const PostImage = ({ photo, postId, base_url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <ImageViewModal closeFn={closeModal} imageSrc={base_url + photo.path} />}
      <img key={photo.id} src={base_url + photo.path.replace("/media/", "/media/md-")} onClick={openModal} />
    </>
  );
};

export default PostImage;
