import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MoneyCardComponent } from './components/shared/money-card/money-card.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, DashboardComponent, MoneyCardComponent, TransactionsTableComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
