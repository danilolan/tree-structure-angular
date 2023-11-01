import { Component, Input } from '@angular/core';
import { TreeNode } from 'src/app/services/tree/tree.service';
import { InputComponent } from '../input/input.component';

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