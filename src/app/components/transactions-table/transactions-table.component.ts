import {
	AfterViewInit,
	Component,
	Input,
	OnDestroy,
	OnInit,
	Output,
	ViewChild,
} from "@angular/core";
import { StoreTransactionService } from "src/app/services/store-transaction.service";
import { ModalComponent } from "../modal/modal.component";
import { ModalConfig } from "../../models/modal-config.model";
import { Observer, Subscription } from "rxjs";
import { Transaction } from "../../models/transaction.model";

@Component({
	selector: "app-transactions-table",
	templateUrl: "./transactions-table.component.html",
	styleUrls: ["./transactions-table.component.scss"],
})
export class TransactionsTableComponent implements OnDestroy {
	deleteTransactionImg: string = "assets/minus.svg";

	transactionsReceived!: string[];

	subscription!: Subscription;
	description!: string;
	amount!: number;

	public transactionInfos: any;
	@ViewChild("modal") private _modalComponent!: ModalComponent;
	public modalConfig: ModalConfig = {
		modalTitle: "Nova transação",
		onDismiss: () => {
			return true;
		},
		dismissButtonLabel: "Dismiss",
		onClose: () => {
			return true;
		},
		closeButtonLabel: "Close",
	};

	constructor(private _storeTransactionService: StoreTransactionService) {
		this.subscription = _storeTransactionService.description$.subscribe((description) => {
			this.description = description;
		});
	}

	ngOnDestroy(): void {
		// prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}

	async openModal() {
		return await this._modalComponent.openModal();
	}
}
