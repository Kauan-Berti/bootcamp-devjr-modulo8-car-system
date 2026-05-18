import { Component } from '@angular/core';
import { Car } from '../../models/car.interface';
import { CommonModule} from "@angular/common";
import { CarComponent } from "../car/car.component";

@Component({
  selector: 'app-cars',
  imports: [CommonModule, CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {

    car: Car = {} as Car;
    isUpdate: boolean = false;
    idCounter: number = 0;

    cars: Car[] = [
      { id: 1, name: 'Gol', manufacturer: 'Volkswagen', preco: 80000, ano: 2020 },
    ];

    saveCar(){
      if(!this.isUpdate){
        this.car.id = this.idCounter;
        this.idCounter++;
        this.cars.push(this.car);
      }

      this.car = {} as Car;
      this.isUpdate = false;
    }

    update(selectedCar: Car){
      this.car = selectedCar;
      this.isUpdate = true;
    }

    remove(selectedCar: Car){
      this.cars = this.cars.filter(c => c !== selectedCar);
    }

}
