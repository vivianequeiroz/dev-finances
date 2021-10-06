import { Component, OnInit } from "@angular/core";
import { StoreTransactionService } from "src/app/services/store-transaction.service";

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

	constructor(private _storeTransactionService: StoreTransactionService) {}

	ngOnInit(): void {}

	openModal(): void {
		console.log("Open modal works!");
	}
}
