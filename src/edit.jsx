import Siema from "siema";
import { debounce } from "throttle-debounce";
import { Resizable as ResizableBox } from "re-resizable";
const { Button, Dashicon } = wp.components;
const { __ } = wp.i18n;
const { useEffect, useState, useRef } = wp.element;
import EditElement from "./components/editElement";
import AddImage from "./components/addImage";
import Panel from "./components/panel";

import "./styles/index.scss";

// model for bloc
const model = {
  image: undefined,
  imageId: undefined
};

const Edit = props => {
  const { attributes, setAttributes, toggleSelection, isSelected } = props;
  const { blocs, height, showDot, showArrow } = attributes;
  const [selected, setSelected] = useState(0);
  // container carousel
  const container = useRef();
  // ref to carousel
  let carousel = useRef();

  // destroy carousel on change element
  const destroyCarousel = (cb = () => true, resetDom = true) => {
    // remove and reste dom
    if (carousel.current) carousel.current.destroy(resetDom, cb);
  };

  // re init carousel with new element
  const initCarousel = (remove = false, index = 0) => {
    if (carousel.current) {
      setTimeout(() => {
        // total items
        const length = container.current.childNodes.length;
        // init new carousel
        carousel.current = new Siema({
          selector: container.current,
          onChange: () => setSelected(carousel.current.currentSlide)
        });

        if (length > 0) {
          // if remove, take index of bloc removed - 1 or take last
          const _i = remove === true ? index - 1 : length;
          const current = _i < 0 ? 0 : _i;
          setSelected(current);
          carousel.current.goTo(current);
        }
      }, 100);
    }
  };

  // init carousel on mount
  useEffect(() => {
    // init first carousel
    carousel.current = new Siema({
      selector: container.current,
      onChange: () => {
        setSelected(carousel.current.currentSlide);
      }
    });
  }, []);

  // remove image
  const onRemoveImage = i => {
    destroyCarousel(() => {
      // delete bloc image
      const _blocs = { ...blocs };
      delete _blocs[i];
      // reset keys
      const newBlocs = {};
      Object.keys(_blocs).forEach((e, i) => {
        newBlocs[i] = _blocs[e];
      });

      setAttributes({
        blocs: newBlocs
      });
      initCarousel(true, i);
    });
  };

  const arrowHandler = (next = true) => {
    const current = carousel.current.currentSlide;
    carousel.current.goTo(next ? current + 1 : current - 1);
  };
  const blockKeys = Object.keys(blocs);
  return (
    <div className="gm-carousel-bloc-edit">
      <Panel props={props} />
      <div className="gm-carousel-bloc-container">
        <ResizableBox
          size={{
            width: "100%",
            height: height
          }}
          minWidth={"100%"}
          maxWidth={"100%"}
          minHeight={"100%"}
          enable={{
            top: false,
            right: false,
            bottom: true,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false
          }}
          onResizeStart={() => {
            toggleSelection(false);
          }}
          onResize={debounce(50, (event, direction, elt, delta) => {
            setAttributes({
              height: parseInt(height + delta.height, 10)
            });
          })}
          onResizeStop={(event, direction, elt, delta) => {
            carousel.current.resizeHandler();
            setAttributes({
              height: parseInt(height + delta.height, 10)
            });
            toggleSelection(true);
          }}
        >
          <div className="gm-carousel-container" ref={container}>
            {blockKeys.map(b => (
              <EditElement
                height={`${height}px`}
                onRemoveImage={onRemoveImage}
                props={props}
                key={`${blocs[b].imageId} ${b}`}
                index={b}
              />
            ))}
          </div>
          {isSelected && (
            <div
              style={{ top: `${height}px` }}
              className="resizable-handle"
            ></div>
          )}
        </ResizableBox>
        {showArrow === true && blockKeys.length > 1 ? (
          <div className="gm-carousel-arrow-container">
            <button
              onClick={() => arrowHandler(false)}
              className="gm-carousel-arrow-previous"
            >
              <span>{__("previous", "gm-carousel")}</span>
            </button>
            <button onClick={arrowHandler} className="gm-carousel-arrow-next">
              <span>{__("next", "gm-carousel")}</span>
            </button>
          </div>
        ) : null}
        {showDot === true && blockKeys.length > 1 ? (
          <div className="gm-carousel-dot-container">
            {blockKeys.map(b => {
              return (
                <div
                  key={`dot-${b}`}
                  className={`gm-carousel-dot ${
                    +selected === +b ? "gm-carousel-dot-current" : ""
                  }`}
                  onClick={() => carousel.current.goTo(b)}
                ></div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="gm-carousel-add-bloc">
        <AddImage
          initCarousel={initCarousel}
          destroyCarousel={destroyCarousel}
          props={props}
        />
      </div>
    </div>
  );
};

export default Edit;
