import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { InvestmentMatrixComponent } from "./investment-matrix/investment-matrix.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [HeaderComponent, UserInputComponent, InvestmentMatrixComponent],
})
export class AppComponent {}
