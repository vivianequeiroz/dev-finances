import {
	Component,
	EventEmitter,
	Injectable,
	Input,
	OnInit,
	Output,
	TemplateRef,
	ViewChild,
} from "@angular/core";
import { ModalConfig } from "../../models/modal-config.model";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { StoreTransactionService } from "src/app/services/store-transaction.service";

@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"],
	providers: [StoreTransactionService],
})
@Injectable()
export class ModalComponent implements OnInit {
	@Output() atTransaction = new EventEmitter<any>();
	@Input()
	public modalConfig!: ModalConfig;
	@ViewChild("modal") private modalContent!: TemplateRef<ModalComponent>;
	private modalRef!: NgbModalRef;

	description!: any;
	amount!: any;

	constructor(
		private modalService: NgbModal,
		private storeTransactionsService: StoreTransactionService
	) {}

	ngOnInit(): void {}

	openModal(): Promise<boolean> {
		return new Promise<boolean>((resolve) => {
			this.modalRef = this.modalService.open(this.modalContent);
			this.modalRef.result.then(resolve, resolve);
		});
	}

	saveTransaction() {
		this.storeTransactionsService.description$.subscribe((description) => {
			this.description.push(description);
		});
		this.storeTransactionsService.amount$.subscribe((amount) => {
			this.amount.push(amount);
		});
	}

	async dismissModal(): Promise<void> {
		if (
			this.modalConfig.shouldDismiss === undefined ||
			(await this.modalConfig.shouldDismiss())
		) {
			const result =
				this.modalConfig.onDismiss === undefined || (await this.modalConfig.onDismiss());
			this.modalRef.dismiss(result);
		}
	}

	saveTransactionData(): void {
		const transactionsData = { description: this.description, amount: this.amount };
		this.atTransaction.emit(transactionsData);
		console.log("Data saved: ", transactionsData);
		this.dismissModal();
	}
}
