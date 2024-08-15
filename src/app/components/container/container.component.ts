import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AssideComponent } from '../asside/asside.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HomeComponent, AssideComponent, NavComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit {
  ngOnInit(): void {

  }
}
