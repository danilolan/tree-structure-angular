import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TreeNode } from 'src/app/models/treeNode';
import { TreeStructureService } from 'src/app/services/tree/tree.service';

@Component({
  selector: 'app-tree-view-node',
  templateUrl: './tree-view-node.component.html',
  styleUrls: ['./tree-view-node.component.css']
})
export class TreeViewNodeComponent {
  @Input() node: TreeNode = new TreeNode(1, "default", false);

  constructor(private treeStructureService: TreeStructureService) {}

  getChildren(node: TreeNode): TreeNode[] {
    return node.children;
  }

  toggleNodeOpen(): void {
    this.node.open = !this.node.open;
  }

  toggleNodeChecked(): void {
    this.treeStructureService.toggleCheckedNode(this.node.id)
  }

  deleteNode(): void {
    this.treeStructureService.deleteNode(this.node.id)
  }
  addNode(): void {
    this.treeStructureService.addChildToNode(this.node.id, "")
  }
}