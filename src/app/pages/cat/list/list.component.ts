import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface TiposCategorias {
  nome: string;
  registros: number;
  gastosTotais: number;
  porcentagem: string;
  actions: any;
}

const ELEMENT_DATA: TiposCategorias[] = [
  { nome: 'Alimentação', registros: 120, gastosTotais: 34593, porcentagem: '20%', actions: "['editar', 'deletar']" },
  { nome: 'Bebidas', registros: 209, gastosTotais: 40026, porcentagem: '30%', actions: "['editar', 'deletar']" }
];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor() {
  }

  panelOpenState = false;

  displayedColumns: string[] = ['nome', 'registros', 'gastosTotais', 'porcentagem', 'actions'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

  }


}
