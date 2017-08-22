import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationsModule } from '../animations/animations.module';

import { AppHomeComponent } from "../home/home.component";
import { AppAnimationsComponent } from "../animations/animations.component";
import { AppPageNotFoundComponent } from "../notfound/notfound.component";

const appRoutes: Routes = [
	{ path: 'home', component: AppHomeComponent },
	{ path: 'animation', component: AppAnimationsComponent },
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{ path: '**', component: AppPageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes,
			{ enableTracing: true } // for debugging purposes only
		),
		AnimationsModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	AppHomeComponent,
	AppPageNotFoundComponent
];
