import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { InicioComponent } from "../inicio/inicio";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {

}
