import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-money-card",
	templateUrl: "./money-card.component.html",
	styleUrls: ["./money-card.component.scss"],
})
export class MoneyCardComponent implements OnInit {
	cards = [
		{
			title: "Entradas",
			alt: "Seta para cima em cor verde indicando entradas",
			src: "https://raw.githubusercontent.com/Viviane-Queiroz/dev-finances/main/src/assets/income.svg",
			amount: "R$7.645,76",
			background: "white-bg",
		},
		{
			title: "Saídas",
			src: "https://raw.githubusercontent.com/Viviane-Queiroz/dev-finances/main/src/assets/expense.svg",
			alt: "Seta para baixo em cor vermelha indicando saídas",
			amount: "R$3.635,23",
			background: "white-bg",
		},
		{
			title: "Total",
			src: "https://raw.githubusercontent.com/Viviane-Queiroz/dev-finances/main/src/assets/total.svg",
			alt: "Símbolo de cifrão",
			amount: "R$11.280,99",
			background: "green-bg",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
