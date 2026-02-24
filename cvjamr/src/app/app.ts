import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Inicio } from "./components/inicio/inicio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cvjamr';
}
