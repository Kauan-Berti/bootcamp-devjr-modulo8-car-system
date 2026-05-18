import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./components/title/title.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
