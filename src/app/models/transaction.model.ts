export interface Transaction {
	id: number;
	description: string;
	amount: number;
	delete: boolean;
	date: Date;
}
