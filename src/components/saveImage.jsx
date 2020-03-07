import "../styles/index.scss";

const SaveImage = ({ props, index }) => {
  const { blocs, height } = props.attributes;
  const { image, alt } = blocs[index];
  if (!image) return <></>;
  const { media_details, title, alt_text, source_url } = image;
  if (!media_details) return <></>;
  const { sizes } = media_details;
  const { large, full } = sizes;
  const pic = large || full;
  const format =
    pic.width < pic.height ? "gm-format-portrait" : "gm-format-paysage";
  const style =
    format === "gm-format-portrait" ? { maxHeight: `${height}px` } : null;
  return (
    <>
      <img
        style={style}
        className={format}
        src={pic ? pic.source_url : source_url}
        // style={{ maxHeight: height }}
        alt={alt || alt_text || title.raw}
      />
    </>
  );
};

export default SaveImage;
