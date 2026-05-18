import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./components/title/title.component";
import { CarComponent } from "./components/car/car.component";
import { CarsComponent } from "./components/cars/cars.component";
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, CarComponent, CarsComponent, FormsModule, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
