import { Component, OnInit } from '@angular/core';
import { TreeStructureService } from 'src/app/services/tree/tree.service';
import { TreeViewNodeComponent } from '../tree-view-node/tree-view-node.component';
import { TreeNode } from 'src/app/models/treeNode';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  tree: TreeNode[] = [];

  constructor(private treeStructureService: TreeStructureService) {}

  ngOnInit(): void {
    this.tree = this.treeStructureService.getTree();
  }

  // Função para obter os filhos de um nó
  getChildNodes(node: TreeNode): TreeNode[] {
    return node.children;
  }
}