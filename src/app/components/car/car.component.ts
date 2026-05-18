import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/car.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {

  @Input()
  car: Car = {} as Car;

  @Output()
  saveEmmiter = new EventEmitter();

  save(){
    this.saveEmmiter.emit(this.car);
  }
}
