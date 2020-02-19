import "../styles/index.scss";

const SaveImage = ({ props, index }) => {
  const { blocs } = props.attributes;
  const { image } = blocs[index];
  if (!image) return <></>;
  const { media_details, alt_text, source_url } = image;
  if (!media_details) return <></>;
  const { sizes } = media_details;
  const { large, full, gm_mobile_size } = sizes;
  const pic = large || full;
  return (
    <>
      <img
        src={pic ? pic.source_url : source_url}
        srcSet={`${
          gm_mobile_size ? gm_mobile_size.source_url : pic.source_url
        } 600w`}
        alt={alt_text}
      />
    </>
  );
};

export default SaveImage;
