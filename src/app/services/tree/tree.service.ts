import { Injectable } from '@angular/core';

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

  constructor() {
    this.root = [new TreeNode(1, 'Root')];
  }

  getTree(): TreeNode[] {
    return this.root
  }

  addChildToNode(parentId: number, childName: string): void {
    const parentNode = this.findNodeById(this.root, parentId);
    if (parentNode) {
      const childNode = new TreeNode(this.generateUniqueId(), childName);
      parentNode.children.push(childNode);
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
  
  private generateUniqueId(): number {
    //#TODO generate a uuid
    return Date.now();
  }
}
