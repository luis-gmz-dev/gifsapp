import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
	SearchGifsResponse,
	Gif,
} from '../interface/searchGifsResponse.interface';

@Injectable({
	providedIn: 'root',
})
export class GifsService {
	private apiKey: string = 'BVEB08jfU0uCPBXNoEqlWRBHT9KZH7Ua';
	private apiURL: string = 'https://api.giphy.com/v1/gifs/';
	private _historial: string[] = [];
	public gifsEncontrados: Gif[] = [];
	public ultimoTerminoBuscado: string = '';

	public get historial() {
		return [...this._historial];
	}

	constructor(private http: HttpClient) {
		this._historial = JSON.parse(localStorage.getItem('historial')) || [];
		this.gifsEncontrados =
			JSON.parse(localStorage.getItem('gifsEncontrados')) || [];
	}

	public buscarGifs(termino: string): void {
		termino = termino.trim().toLowerCase();
		if (termino.trim().length > 0 && !this._historial.includes(termino)) {
			this._historial.unshift(termino);
			this._historial = this._historial.slice(0, 10);
		}
		this.ultimoTerminoBuscado = termino;
		localStorage.setItem('historial', JSON.stringify(this._historial));

		const params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('limit', '10')
			.set('q', termino);

		this.http
			.get<SearchGifsResponse>(this.apiURL + 'search', { params })
			.subscribe((resp) => {
				this.gifsEncontrados = resp.data;
				localStorage.setItem(
					'gifsEncontrados',
					JSON.stringify(this.gifsEncontrados)
				);
			});
	}
}
