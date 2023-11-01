export class TreeNode {
  id: number;
  name: string;
  checked: boolean;
  open: boolean;
  children: TreeNode[] = [];

  constructor(id: number, name: string, open: boolean) {
    this.id = id;
    this.name = name;
    this.open = open;
    this.checked = false;
  }
}