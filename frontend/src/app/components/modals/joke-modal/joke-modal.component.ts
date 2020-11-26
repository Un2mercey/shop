import {AfterViewInit, Component} from '@angular/core';


@Component({
	selector: 'joke-modal',
	templateUrl: './joke-modal.component.html',
})
export class JokeModalComponent implements AfterViewInit{
	public elem;
	constructor() {
	}

	ngAfterViewInit(): void {
		this.elem = document.getElementById('nope')
	}
	test() {
		this.elem.style.position = 'absolute';
		this.elem.style.left = Math.floor(Math.random() * 80) + 1 + '%';
		this.elem.style.top = Math.floor(Math.random() * 80) + 1 + '%';
	}
}
