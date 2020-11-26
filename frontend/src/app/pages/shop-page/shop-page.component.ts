import {Component} from '@angular/core';
import {RandomizeService} from '../../services/randomize.service';
import {MatDialog} from '@angular/material/dialog';
import {JokeModalComponent} from '../../components/modals/joke-modal/joke-modal.component';


@Component({
  selector: 'shop-page',
  templateUrl: './shop-page.component.html'
})
export class ShopPageComponent {
	private goRandom

	constructor(
		private modal: MatDialog,
		public randomizeService: RandomizeService
	) {

	}

	public openModal = (): void => {
		this.modal.open(JokeModalComponent);
	}

	ngOnDestroy(): void {
		this.goRandom.unsubscribe();
	}

}

