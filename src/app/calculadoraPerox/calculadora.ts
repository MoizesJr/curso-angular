import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {

  volSulfato: number = 0;
  fatorCorrecao: number = 0;
  massaGordura: number = 0;
  resultado: number = 0;

  calcularResultado(){
     this.resultado = (this.volSulfato * 0.01 * this.fatorCorrecao * 1000) / (this.massaGordura * 2);
  }
}
