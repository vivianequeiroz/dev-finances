import { Component, OnInit, Output, ViewChild } from "@angular/core";
import { StoreTransactionService } from "src/app/services/store-transaction.service";
import { ModalComponent } from "../modal/modal.component";
import { ModalConfig } from "../../models/modal-config.model";

@Component({
	selector: "app-transactions-table",
	templateUrl: "./transactions-table.component.html",
	styleUrls: ["./transactions-table.component.scss"],
})
export class TransactionsTableComponent implements OnInit {
	public transactionInfos: any;
	@ViewChild("modal") private _modalComponent!: ModalComponent;
	public modalConfig: ModalConfig = {
		modalTitle: "Title",
		onDismiss: () => {
			return true;
		},
		dismissButtonLabel: "Dismiss",
		onClose: () => {
			return true;
		},
		closeButtonLabel: "Close",
	};

	constructor(private _storeTransactionService: StoreTransactionService) {}
	disableNewTransaction?: boolean;
	ngOnInit(): void {}

	async openModal() {
		return await this._modalComponent.openModal();
	}
}
