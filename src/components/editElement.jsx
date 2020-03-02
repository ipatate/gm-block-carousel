const { Button, Dashicon, TextControl, Spinner } = wp.components;
const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

import "../styles/index.scss";

const EditElement = ({ props, index, onRemoveImage }) => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  const { imageId, image, alt } = blocs[index];
  const { media_details } = image;
  const format =
    media_details.width < media_details.height
      ? "gm-format-portrait"
      : "gm-format-paysage";
  return (
    <div className="gm-carousel-cell">
      {!!imageId && !image && <Spinner />}
      {imageId && image ? (
        <>
          <img src={image.source_url} alt="" className={format} />
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
