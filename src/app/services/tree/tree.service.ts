import { Injectable } from '@angular/core';
import { DbService } from '../db/db.service';

export class TreeNode {
  id: number;
  name: string;
  checked: boolean;
  children: TreeNode[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.checked = false;
  }
}

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
      this.root = [new TreeNode(1, 'Root')];
      this.saveTreeToLocalStorage()
    }
  }

  getTree(): TreeNode[] {
    return this.root
  }

  addChildToNode(parentId: number, childName: string): void {
    const parentNode = this.findNodeById(this.root, parentId);
    if (parentNode) {
      const childNode = new TreeNode(this.generateUniqueId(), childName);
      parentNode.children.push(childNode);

      // Após adicionar um filho, atualize a árvore no localStorage
      this.saveTreeToLocalStorage();
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
    this.dbService.setItem('treeData', this.root);
  }
  
  private generateUniqueId(): number {
    //#TODO generate a uuid
    return Date.now();
  }
}
