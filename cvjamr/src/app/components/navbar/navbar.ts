import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Header } from "../header/header";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Header],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {

}
