import { Component } from '@angular/core';
import { Inicio } from "../inicio/inicio";

@Component({
  selector: 'app-header',
  imports: [Inicio],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
}
