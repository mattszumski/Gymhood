import { ImagePreviewContainer } from "./styled/ImagePreviewContainer.styled";

const ImagePreview = ({ imageFile, handleRemove }) => {
  const handleClick = (event) => {
    handleRemove(imageFile.tempId);
  };

  return (
    <ImagePreviewContainer>
      <img src={imageFile.src} />
      <div className="overlay">
        <div className="text">
          <button onClick={handleClick}>Delete</button>
        </div>
      </div>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
