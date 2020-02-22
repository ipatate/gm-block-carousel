// const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import SaveElement from "./components/saveElement";

import "./styles/index.scss";

const Save = props => {
  const { blocs, showArrow, showDot } = props.attributes;
  const blockKeys = Object.keys(blocs);
  return (
    <div
      className="gm-carousel-bloc-container"
      data-dot={showDot}
      data-arrow={showArrow}
    >
      <div className="gm-carousel-container">
        {Object.keys(blocs).map(b => (
          <SaveElement props={props} key={b} index={b} />
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
        <div className="gm-carousel-dot-container">
          {Object.keys(blocs).map(b => {
            return <div className="gm-carousel-dot"></div>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Save;
