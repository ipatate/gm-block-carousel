const { Button, Dashicon, Spinner } = wp.components;
const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

import "../styles/index.scss";

const EditElement = ({ props, index, onRemoveImage }) => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  const { imageId, image } = blocs[index];
  return (
    <div className="gm-carousel-cell">
      {!!imageId && !image && <Spinner />}
      {imageId && image ? (
        <>
          <img src={image.source_url} alt="" />
          <Button
            onClick={() => onRemoveImage(index)}
            title={__("remove", "gm-bloc")}
          >
            <Dashicon icon="dismiss" />
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default EditElement;
