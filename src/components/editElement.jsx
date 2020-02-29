const { Button, Dashicon, TextControl, Spinner } = wp.components;
const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

import "../styles/index.scss";

const EditElement = ({ props, index, height, onRemoveImage }) => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  const { imageId, image, alt } = blocs[index];
  return (
    <div className="gm-carousel-cell">
      {!!imageId && !image && <Spinner />}
      {imageId && image ? (
        <>
          <img src={image.source_url} alt="" style={{ maxHeight: height }} />
          <Button
            onClick={() => onRemoveImage(index)}
            title={__("remove", "gm-carousel")}
          >
            <Dashicon icon="dismiss" />
          </Button>
          <TextControl
            className="gm-alt-img"
            label={__("Image description", "gm-carousel")}
            value={alt}
            onChange={alt =>
              setAttributes({
                blocs: {
                  ...blocs,
                  ...{ [index]: { ...blocs[index], alt } }
                }
              })
            }
          />
        </>
      ) : null}
    </div>
  );
};

export default EditElement;
