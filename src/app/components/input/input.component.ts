import { Component } from '@angular/core';
import { DbService } from 'src/app/services/db/db.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  inputValue: string = '';

  constructor(private dbService: DbService) {}

  submitInput() {
    this.dbService.setItem("test", this.inputValue);
    console.log(this.inputValue); // Exemplo: exibir o valor no console
  }
}
