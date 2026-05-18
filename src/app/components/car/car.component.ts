import { Component } from '@angular/core';
import { Car } from '../../models/car.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {

  car: Car = {} as Car;

  save(){
    console.log("Registro do carro: " + this.car.name + " Salvo com sucesso!");
  }
}
