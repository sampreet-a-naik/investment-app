import { CurrencyPipe } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-investment-matrix",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-matrix.component.html",
  styleUrl: "./investment-matrix.component.css",
})
export class InvestmentMatrixComponent {
  private investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.resultData());
}
