import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { TreeViewNodeComponent } from './components/tree-view-node/tree-view-node.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TreeViewComponent,
    TreeViewNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
