import { ImagePreviewContainer } from "./styled/ImagePreviewContainer.styled";

const ImagePreview = ({ imageFile, handleRemove }) => {
  const handleClick = (event) => {
    handleRemove(imageFile.tempId);
  };

  return (
    <ImagePreviewContainer>
      <img src={imageFile.src} width="300" />
      <p>Filename: {imageFile.name}</p>
      <button onClick={handleClick}>Delete</button>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
