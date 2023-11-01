import { Injectable } from '@angular/core';
import { DbService } from '../db/db.service';
import { TreeNode } from 'src/app/models/treeNode';

@Injectable({
  providedIn: 'root'
})
export class TreeStructureService {
  private root: TreeNode[];

  constructor(private dbService: DbService) {
    const treeData = dbService.getItem('treeData');
    if (treeData) {
      this.root = treeData
    } else {
      this.root = [];
      this.saveTreeToLocalStorage()
    }
  }

  getTree(): TreeNode[] {
    return this.root
  }

  addChildToNode(parentId: number | null, childName: string): void {
    if(!parentId) {
      const childNode = new TreeNode(this.generateUniqueId(), childName, false);
      this.root.push(childNode);
      this.saveTreeToLocalStorage();

      return
    }

    const parentNode = this.findNodeById(this.root, parentId);
    if (parentNode) {
      const childNode = new TreeNode(this.generateUniqueId(), childName, false);
      parentNode.children.push(childNode);

      this.saveTreeToLocalStorage();
    }
  }

  toggleCheckedNode(id: number) {
    const node = this.findNodeById(this.root, id);
  
    if (node) {
      this.setChildrenChecked(node, node.checked);
  
      this.saveTreeToLocalStorage();
    } else {
      console.error(`Node with ID ${id} not found.`);
    }
  }
  
  private setChildrenChecked(node: TreeNode, checked: boolean) {
    for (const child of node.children) {
      child.checked = checked;
      this.setChildrenChecked(child, checked);
    }
  }
  

  private findNodeById(nodes: TreeNode[], id: number): TreeNode | null {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }
      const foundNode = this.findNodeById(node.children, id);
      if (foundNode) {
        return foundNode;
      }
    }
    return null;
  }

  private saveTreeToLocalStorage(): void {
    console.log(this.root)
    this.dbService.setItem('treeData', this.root);
  }
  
  private generateUniqueId(): number {
    //#TODO generate a uuid
    return Date.now();
  }
}
