// const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import SaveElement from "./components/saveElement";

const Save = props => {
  const { blocs, showArrow, showDot, id, height } = props.attributes;
  const blockKeys = Object.keys(blocs);

  return (
    <div
      className="gm-carousel-bloc-container"
      data-dot={showDot}
      data-arrow={showArrow}
    >
      <div className={`gm-carousel-container carousel_${id}`}>
        {Object.keys(blocs).map(b => (
          <SaveElement props={props} keyRand={id} key={b} index={b} />
        ))}
      </div>
      {showArrow === true && blockKeys.length > 1 ? (
        <div className="gm-carousel-arrow-container">
          <button className="gm-carousel-arrow-previous">
            <span>{__("previous", "gm-carousel")}</span>
          </button>
          <button className="gm-carousel-arrow-next">
            <span>{__("next", "gm-carousel")}</span>
          </button>
        </div>
      ) : null}
      {showDot === true && blockKeys.length > 1 ? (
        <div role="tablist" className="gm-carousel-dot-container">
          {Object.keys(blocs).map((b, i) => {
            return (
              <button
                role="tab"
                tabindex="-1"
                aria-selected="false"
                aria-controls={`${id}_${i}`}
                className="gm-carousel-dot"
              >
                <span>{`${__("image", "gm-carousel")} ${i + 1}`}</span>
              </button>
            );
          })}
        </div>
      ) : null}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .carousel_${id} .gm-carousel-cell {
      max-height: ${height}px;
      }
`
        }}
      ></style>
    </div>
  );
};

export default Save;
