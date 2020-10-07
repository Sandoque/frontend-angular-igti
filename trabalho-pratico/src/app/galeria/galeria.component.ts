import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input() titulo: string = '';
  @Input() fotos: string[] = [];
  fotoAtual: number = 0;

  mudaParaProxima() {
    this.fotoAtual++;
  }

  voltaParaAnterior() {
    this.fotoAtual--;
  }

  estaNaUltimaFoto() {
    this.fotoAtual === this.fotos.length - 1;
  }
}
