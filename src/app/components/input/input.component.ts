import { Component, ElementRef, Input, NgModule, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  @ViewChild("myinput") myInputField: ElementRef;
  userForm: FormGroup;

  ngAfterViewInit(): void {
    // Set focus to the firstName field
    this.myInputField.nativeElement.focus();
  }

  //#TODO input validations
  submitInput() {
    this.treeService.editNode(this.nodeId, this.inputValue);
    this.inputValue = '';
  }
}
