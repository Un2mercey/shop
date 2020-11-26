import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

const UI_COMPONENTS = [
	MatToolbarModule,
	MatButtonModule,
	MatDialogModule
];

@NgModule({
	imports: UI_COMPONENTS,
	exports: UI_COMPONENTS
})
export class UiModule {
}
