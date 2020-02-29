import "../styles/index.scss";

const SaveImage = ({ props, index }) => {
  const { blocs, height } = props.attributes;
  const { image } = blocs[index];
  if (!image) return <></>;
  console.log(image);

  const { media_details, title, alt_text, source_url } = image;
  if (!media_details) return <></>;
  const { sizes } = media_details;
  const { large, full } = sizes;
  const pic = large || full;
  return (
    <>
      <img
        src={pic ? pic.source_url : source_url}
        style={{ maxHeight: height }}
        alt={alt_text || title.raw}
      />
    </>
  );
};

export default SaveImage;
