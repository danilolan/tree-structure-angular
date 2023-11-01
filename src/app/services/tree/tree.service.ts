import { Injectable } from '@angular/core';

export class TreeNode {
  id: number;
  name: string;
  children: TreeNode[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TreeStructureService {
  private root: TreeNode;

  constructor() {
    this.root = new TreeNode(1, 'Root');
  }

  addChildToNode(parentId: number, childName: string): void {
    const parentNode = this.findNodeById(this.root, parentId);
    if (parentNode) {
      const childNode = new TreeNode(this.generateUniqueId(), childName);
      parentNode.children.push(childNode);
    }
  }

  private findNodeById(node: TreeNode, id: number): TreeNode | null {
    if (node.id === id) {
      return node;
    }
    for (const child of node.children) {
      const foundNode = this.findNodeById(child, id);
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
