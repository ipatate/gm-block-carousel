const { Button, Dashicon, Spinner } = wp.components;
const { useEffect } = wp.element;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { useSelect } = wp.data;
const { __ } = wp.i18n;

const ALLOWED_MEDIA_TYPES = ["image"];

const AddImage = ({ props, initCarousel, destroyCarousel }) => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  const length = Object.keys(blocs).length;
  const index = length;
  // get the image info for new image
  const image = useSelect(
    select => {
      let newPic = null;
      // search image with newImage === true
      Object.keys(blocs).forEach(b => {
        if (blocs[b].newImage === true) {
          newPic = blocs[b];
        }
      });
      const { getMedia } = select("core");
      // get media for this new pic added
      return newPic ? getMedia(newPic.imageId) : {};
    },
    [blocs]
  );
  // update image info to attribute
  useEffect(() => {
    const keys = Object.keys(blocs);
    if (image && image.id) {
      let _index = null;
      // search infex for newImage === true
      keys.forEach(b => {
        if (blocs[b].newImage === true) {
          _index = b;
        }
      });
      if (_index) {
        setAttributes({
          blocs: {
            ...blocs,
            ...{ [_index]: { ...blocs[_index], image, newImage: false } }
          }
        });
      }
    }
  }, [image]);

  /**
   * add new image
   * @param {} image
   */
  const onUpdateImage = image => {
    destroyCarousel(() => {
      setAttributes({
        blocs: {
          ...blocs,
          ...{
            [index]: {
              ...blocs[index],
              imageId: image.id,
              image,
              // set to true for get media after
              newImage: true
            }
          }
        }
      });
      initCarousel();
    }, true);
  };
  return (
    <>
      <MediaUploadCheck>
        <MediaUpload
          title={__("Image", "")}
          onSelect={onUpdateImage}
          allowedTypes={ALLOWED_MEDIA_TYPES}
          value={""}
          render={({ open }) => {
            return (
              <Button
                onClick={open}
                title={__("add image", "gm-bloc")}
                className="components-button editor-post-preview is-button is-default is-large"
              >
                {__("add image", "gm-bloc")}
                {"  "}
                <Dashicon icon="plus-alt" />
              </Button>
            );
          }}
        />
      </MediaUploadCheck>
    </>
  );
};

export default AddImage;
