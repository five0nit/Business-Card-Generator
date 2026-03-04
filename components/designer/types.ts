export type DesignerControlState = {
  cameraAngle: number;
  depth: number;
  textScale: number;
  iconScale: number;
};

export const DEFAULT_CONTROLS: DesignerControlState = {
  cameraAngle: 28,
  depth: 1.1,
  textScale: 1,
  iconScale: 1,
};
