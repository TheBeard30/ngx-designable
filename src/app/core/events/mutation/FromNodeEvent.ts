import { ITreeNode, TreeNode } from '../../models';
import { IEngineContext } from '../../types';
import { ICustomEvent } from '@/app/shared/event';

export interface IFromNodeEventData {
  //事件发生的数据源
  source: ITreeNode;
  //事件发生的目标对象
  target: TreeNode;
}

export class FromNodeEvent implements ICustomEvent {
  type = 'from:node';
  data: IFromNodeEventData;
  context: IEngineContext;
  constructor(data: IFromNodeEventData) {
    this.data = data;
  }
}
