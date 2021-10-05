import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-transactions-table",
	templateUrl: "./transactions-table.component.html",
	styleUrls: ["./transactions-table.component.scss"],
})
export class TransactionsTableComponent implements OnInit {
	transactionInfos = [
		{
			description: "Entradas",
			value: "R$323,00",
			date: "20/11/2021",
			delete:
				"https://raw.githubusercontent.com/Viviane-Queiroz/dev-finances/main/src/assets/minus.svg",
		},
		{
			description: "Entradas",
			value: "R$323,00",
			date: "20/11/2021",
			delete:
				"https://raw.githubusercontent.com/Viviane-Queiroz/dev-finances/main/src/assets/minus.svg",
		},
		{
			description: "Entradas",
			value: "R$323,00",
			date: "20/11/2021",
			delete:
				"https://raw.githubusercontent.com/Viviane-Queiroz/dev-finances/main/src/assets/minus.svg",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
