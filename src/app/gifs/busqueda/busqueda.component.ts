import { Component, ElementRef, ViewChild } from '@angular/core';

/**Servicios */
import { GifsService } from '../services/gifs.service';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styles: [],
})
export class BusquedaComponent {
	constructor(private _gifsService: GifsService) {}

	@ViewChild('buscarGifs') palabraBuscar!: ElementRef<HTMLInputElement>;

	public buscar(buscarGifs: string) {
		console.group('Enviado por metodo');
		console.log(buscarGifs);
		console.groupEnd();

		const valor = this.palabraBuscar.nativeElement.value;
		console.group('Recibido por child');
		console.log(valor);
		console.groupEnd();
		this.palabraBuscar.nativeElement.value = '';

		this._gifsService.buscarGifs(valor);
	}
}
