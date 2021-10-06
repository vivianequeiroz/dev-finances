import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Transaction } from "../models/transaction.model";

@Injectable({
	providedIn: "root",
})
export class StoreTransactionService {
	private _transaction$ = new BehaviorSubject<Transaction>(
		null!
	) as BehaviorSubject<Transaction>;
	public transaction$ = this._transaction$.asObservable();

	private _localStorage: Storage;

	constructor() {
		this._localStorage = window.localStorage;
	}

	setTransaction(data: Transaction) {
		const jsonData = JSON.stringify(data);
		this._localStorage.setItem("transaction", jsonData);
		this._transaction$.next(data);
	}

	getTransaction() {
		const data = JSON.parse(this._localStorage.getItem("transaction")!);
		this._transaction$.next(data);
	}

	clearInfo() {
		this._localStorage.removeItem("myData");
		this._transaction$.next(null!);
		// ! => non-null assertion operator
	}

	clearAllLocalStorage() {
		this._localStorage.clear();
		this._transaction$.next(null!);
	}

	// clearAllTransactions(): boolean {
	// 	if (this.localStorage) {
	// 		this.localStorage.clear();
	// 		return true;
	// 	}
	// 	return false;
	// }
}
