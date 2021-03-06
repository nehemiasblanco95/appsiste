import { Component } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';


@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

	usuarios: any[];
	itemsPerPage: number;
	totalItems: any;
	page: any;
	totalCount: number;
	previousPage: any;
	pageG = 1;
	rpp = 10;
	load = true;

	filtros: any;

	errMsj = null;

	constructor(public _usuarioService: UsuarioService) {
		this.filtros = { 'nombre': '' };
		this.loadPage(1);
	}

	loadPage(page: number) {
		if (page !== this.previousPage) {
			this.previousPage = page;
			this.loadData();
		} else {
		}
	}

	loadRpp(value: number) {
		this.pageG = 1;
		this.rpp = value;
		this.loadData();
	}

	loadData() {
		this.load = true;
		this._usuarioService
			.getUsuariosPaginado(this.pageG, this.rpp, this.filtros)
			.subscribe(
				data => {
					this.totalItems = data.total_paginas * 10;
					this.usuarios = data.registros;
					this.totalCount = data.cuantos;
					this.load = false;
				},
				err => {
					this.errMsj = err.error.mensaje;
				}
			);
	}

	filtrar() {
		this.pageG = 1;
		this.loadData();
	}

}

