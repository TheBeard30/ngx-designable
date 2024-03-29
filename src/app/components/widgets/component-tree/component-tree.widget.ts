import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { usePrefix } from '@/app/utils';
import { TreeNodeWidget } from '../tree-node/tree-node.widget';
import { IDesignerComponents } from '../../types';
import { GlobalRegistry } from '@/app/core/registry';
import { Engine, TreeNode } from '@/app/core/models';

@Component({
  selector: 'app-component-tree-widget',
  standalone: true,
  template: `
    <div class="{{ prefix }}" [style]="style">
      <app-tree-node-widget [node]="tree"></app-tree-node-widget>
    </div>
  `,
  styleUrls: ['./component-tree.widget.less'],
  imports: [TreeNodeWidget],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTreeWidget implements OnChanges, AfterViewInit {
  prefix = usePrefix('component-tree');

  @Input() components: IDesignerComponents;

  @Input() style: { [p: string]: any };

  tree: TreeNode;

  displayName = 'ComponentTreeWidget';

  constructor(private designer: Engine) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.components && changes.components.currentValue) {
      this.registerDesignerBehaviors();
    }
  }

  ngAfterViewInit(): void {
    this.tree = this.useTree();
  }

  registerDesignerBehaviors() {
    GlobalRegistry.registerDesignerBehaviors(this.components);
  }

  useTree() {
    return this.designer.workbench.currentWorkspace.operation.tree;
  }
}
