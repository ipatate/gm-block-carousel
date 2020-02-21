const { PanelBody, ToggleControl } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { __ } = wp.i18n;

const Panel = ({ props }) => {
  const { attributes, setAttributes } = props;
  const { showArrow, showDot } = attributes;
  return (
    <InspectorControls>
      <PanelBody title={__("Settings", "gm-carousel")}>
        <ToggleControl
          label={__("Show Dot", "gm-carousel")}
          checked={showDot}
          onChange={() => setAttributes({ showDot: !showDot })}
        />
        <ToggleControl
          label={__("Show Arrow", "gm-carousel")}
          checked={showArrow}
          onChange={() => setAttributes({ showArrow: !showArrow })}
        />
      </PanelBody>
    </InspectorControls>
  );
};

export default Panel;
