import "../styles/index.scss";

const SaveImage = ({ props, index }) => {
  const { blocs } = props.attributes;
  const { image } = blocs[index];
  if (!image) return <></>;
  const { media_details, alt_text, source_url } = image;
  if (!media_details) return <></>;
  const { sizes } = media_details;
  const { large, full } = sizes;
  const pic = large || full;
  return (
    <>
      <img src={pic ? pic.source_url : source_url} alt={alt_text} />
    </>
  );
};

export default SaveImage;
