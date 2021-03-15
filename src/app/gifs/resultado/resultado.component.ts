import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
	selector: 'app-resultado',
	templateUrl: './resultado.component.html',
	styles: [],
})
export class ResultadoComponent implements OnInit {
	public get gifsEncontrados() {
		return this._gifsService.gifsEncontrados;
	}

	public get ultimoTerminoBuscado(): string {
		return this._gifsService.ultimoTerminoBuscado;
	}

	constructor(private _gifsService: GifsService) {}

	ngOnInit(): void {}
}
