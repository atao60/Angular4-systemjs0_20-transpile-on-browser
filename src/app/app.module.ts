import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routingComponents } from './routing/routing.module';

import { AppComponent } from "./app.component";

@NgModule({
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [AppComponent, routingComponents]
})
export class AppModule { }
