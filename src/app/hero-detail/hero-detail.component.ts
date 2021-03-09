// This component will get data from HeroesComponent and then display them in detail on its template.

// Component and OnInit are for defining the component and providing necessary metadata.
// Input is used to bind this component data to a data input provided by another component.
import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Decorate the hero property to provide input from another source like another component.
  // ? on the property defines that it is optional hence no need to populate the property with data
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }


}
