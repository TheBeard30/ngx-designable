import { EventDriver } from '../../shared/event';
import { Engine } from '../models';
import { MouseMoveEvent } from '../events/cursor';

export class MouseMoveDriver extends EventDriver<Engine> {
  request = null;

  onMouseMove = (e: MouseEvent) => {
    this.request = requestAnimationFrame(() => {
      cancelAnimationFrame(this.request);
      this.dispatch(
        new MouseMoveEvent({
          clientX: e.clientX,
          clientY: e.clientY,
          pageX: e.pageX,
          pageY: e.pageY,
          target: e.target,
          view: e.view
        })
      );
    });
  };

  override attach() {
    this.addEventListener('mousemove', this.onMouseMove, {
      mode: 'onlyOne'
    });
  }

  override detach() {
    this.removeEventListener('mouseover', this.onMouseMove, {
      mode: 'onlyOne'
    });
  }
}
