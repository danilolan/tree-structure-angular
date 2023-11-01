import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TreeNode } from 'src/app/models/treeNode';

@Component({
  selector: 'app-tree-view-node',
  templateUrl: './tree-view-node.component.html',
  styleUrls: ['./tree-view-node.component.css']
})
export class TreeViewNodeComponent {
  @Input() node: TreeNode = new TreeNode(1, "default");

  // Função para obter os filhos de um nó
  getChildren(node: TreeNode): TreeNode[] {
    return node.children;
  }
}