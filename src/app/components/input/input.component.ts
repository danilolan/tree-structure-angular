import { Component, Input, NgModule } from '@angular/core';
import { DbService } from 'src/app/services/db/db.service';
import { TreeStructureService } from 'src/app/services/tree/tree.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @Input() parentId: number | null = null;
  inputValue: string = '';

  constructor(private treeService: TreeStructureService) {}

  //#TODO input validations
  submitInput() {
    this.treeService.addChildToNode(this.parentId, this.inputValue);
    this.inputValue = '';
  }
}
