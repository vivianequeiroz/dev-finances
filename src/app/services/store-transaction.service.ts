import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Transaction } from "../models/transaction.model";

@Injectable({
	providedIn: "root",
})
export class StoreTransactionService {
	private transactionDescription = new Subject<string>();
	private transactionAmount = new Subject<number>();

	description$ = this.transactionDescription.asObservable();
	amount$ = this.transactionAmount.asObservable();

	setTransaction(description: string, amount: number) {
		this.transactionDescription.next(description);
		this.transactionAmount.next(amount);
	}

	clearTransaction() {
		this.transactionDescription = null as any;
		this.transactionAmount = null as any;
	}
}
