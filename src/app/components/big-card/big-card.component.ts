import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  bigPhotoCover: string = '';
  bigCardTitle: string = '';
  bigCardDescription: string = '';
  bigCardFullText: string = '';

  @Input()
  id: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getData(this.id);
  }

  getData(id:string):void {
    const result = dataFake.filter((article) => article.id === id);

    this.bigPhotoCover = result[0].photo
    this.bigCardTitle = result[0].title;
    this.bigCardDescription = result[0].description;
    this.bigCardFullText = result[0].fullText;
  }
}
