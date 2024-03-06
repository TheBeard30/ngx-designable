import { Engine } from './engine';

export enum ScreenType {
  PC = 'PC',
  Responsive = 'Responsive',
  Mobile = 'Mobile',
  Sketch = 'Sketch'
}

export enum ScreenStatus {
  Normal = 'Normal',
  Resizing = 'Resizing',
  Zooming = 'Zooming'
}

export class Screen {
  type: ScreenType;
  scale = 1;
  width: number | string = '100%';
  height: number | string = '100%';
  engine: Engine;
  background = '';
  flip = false;
  status = ScreenStatus.Normal;
  constructor(engine: Engine) {
    this.engine = engine;
    this.type = engine.props.defaultScreenType;
  }
}