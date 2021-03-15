import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
	public get historial() {
		return this._gifsService.historial;
	}

	constructor(private _gifsService: GifsService) {}

	ngOnInit(): void {}

	public buscar(termino) {
		this._gifsService.buscarGifs(termino);
	}
}
