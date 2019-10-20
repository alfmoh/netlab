import { InputDirective } from "./../directives/input.directive";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormComponent } from "./form.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: FormComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [FormComponent, InputDirective]
})
export class FormModule {}
