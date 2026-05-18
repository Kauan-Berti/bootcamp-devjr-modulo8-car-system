import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./components/title/title.component";
import { CarComponent } from "./components/car/car.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, CarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
