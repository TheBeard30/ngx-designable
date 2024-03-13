import { Workspace } from './workspace';
import { Engine } from './engine';
import { globalThisPolyfill } from '@/app/shared/globalThisPolyfill';

export interface IViewportProps {
  engine: Engine;
  workspace: Workspace;
  viewportElement: HTMLElement;
  contentWindow: Window;
  nodeIdAttrName: string;
  moveSensitive?: boolean;
  moveInsertionType?: IViewportMoveInsertionType;
}

export interface IViewportData {
  scrollX?: number;
  scrollY?: number;
  width?: number;
  height?: number;
}

export type IViewportMoveInsertionType = 'all' | 'inline' | 'block';

export class Viewport {
  workspace: Workspace;

  engine: Engine;

  contentWindow: Window;

  viewportElement: HTMLElement;

  dragStartSnapshot: IViewportData;

  scrollX = 0;

  scrollY = 0;

  width = 0;

  height = 0;

  mounted = false;

  attachRequest: number;

  nodeIdAttrName: string;

  moveSensitive: boolean;

  moveInsertionType: IViewportMoveInsertionType;

  nodeElementsStore: Record<string, HTMLElement[]> = {};

  cacheElements() {
    this.nodeElementsStore = {};
    this.viewportRoot?.querySelectorAll(`*[${this.nodeIdAttrName}]`).forEach((element: HTMLElement) => {
      const id = element.getAttribute(this.nodeIdAttrName);
      this.nodeElementsStore[id] = this.nodeElementsStore[id] || [];
      this.nodeElementsStore[id].push(element);
    });
  }

  get viewportRoot() {
    return this.isIframe ? this.contentWindow?.document?.body : this.viewportElement;
  }

  get isMaster() {
    return this.contentWindow === globalThisPolyfill;
  }

  get isIframe() {
    return !!this.contentWindow?.frameElement && !this.isMaster;
  }
}