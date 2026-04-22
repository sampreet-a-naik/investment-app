import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  enteredInitValue = signal("0");
  enteredAnnualValue = signal("0");
  enteredExpectedReturn = signal("0");
  enterDuration = signal("0");

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateResults({
      initialInvestment: +this.enteredInitValue(),
      duration: +this.enterDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualValue(),
    });
    this.enteredInitValue.set("0");
    this.enterDuration.set("0");
    this.enteredExpectedReturn.set("0");
    this.enteredAnnualValue.set("0");
  }
}
