import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-money-card",
	templateUrl: "./money-card.component.html",
	styleUrls: ["./money-card.component.scss"],
})
export class MoneyCardComponent implements OnInit {
	cards = [
		{
			title: "Entradas",
			src: "src/assets/income.svg",
			alt: "Seta para cima em cor verde indicando entradas",
			amount: "R$7.645,76",
		},
		{
			title: "Saídas",
			src: "https://github.com/Viviane-Queiroz/dev-finances/blob/6be1d09032650300296763e2b49de3eff4c8101f/src/assets/expense.svg",
			alt: "Seta para baixo em cor vermelha indicando saídas",
			amount: "R$3.635,23",
		},
		{
			title: "Total",
			src: "https://github.com/Viviane-Queiroz/dev-finances/blob/6be1d09032650300296763e2b49de3eff4c8101f/src/assets/total.svg",
			alt: "Símbolo de cifrão",
			amount: "R$11.280,99",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
