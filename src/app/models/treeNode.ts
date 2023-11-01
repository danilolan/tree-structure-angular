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