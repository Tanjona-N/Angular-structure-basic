import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import de CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  boxDisplay:boolean = true;
  boxHidden () {
    this.boxDisplay = !this.boxDisplay
  }
  constructor() {
    // Code à exécuter lors de l'instanciation du composant
  }

  ngOnInit() {
    // Code à exécuter lors de l'initialisation du composant
    console.log("test");
  }
}
