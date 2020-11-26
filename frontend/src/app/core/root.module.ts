import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RoutingModule} from './routing.module';
import {RootComponent} from './components/root.component';
import {ShopPageComponent} from '../pages/shop-page/shop-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMenuComponent} from '../components/app-menu/app-menu.component';
import {UiModule} from './ui.module';
import {HttpClientModule} from '@angular/common/http';
import {RandomizeService} from '../services/randomize.service';
import {JokeModalComponent} from '../components/modals/joke-modal/joke-modal.component';

@NgModule({
	declarations: [
		RootComponent,
		ShopPageComponent,
		AppMenuComponent,
		JokeModalComponent
	],
	imports: [
		UiModule,
		BrowserModule,
		RoutingModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [
		RandomizeService
	],
	bootstrap: [RootComponent]
})
export class RootModule {
}
