// type Target = ;
type StyleObj = { left?: string; top?: string };

export type GetElement = (element: string | HTMLElement) => HTMLElement | null;
export type MakeBackdropPath = (rect: ClientRect) => string;

export type StyleObjFromTarget = (targetRect: ClientRect) => StyleObj;
export type StyleObjFromTargetAndBubble = (
  targetRect: ClientRect,
  bubbleRect: ClientRect,
) => StyleObj;
