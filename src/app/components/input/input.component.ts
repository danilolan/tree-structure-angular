import { Component, Input, NgModule } from '@angular/core';
import { DbService } from 'src/app/services/db/db.service';
import { TreeStructureService } from 'src/app/services/tree/tree.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @Input() nodeId: number = 1;
  @Input() inputValue: string = '';

  constructor(private treeService: TreeStructureService) {}

  //#TODO input validations
  submitInput() {
    this.treeService.editNode(this.nodeId, this.inputValue);
    this.inputValue = '';
  }
}
