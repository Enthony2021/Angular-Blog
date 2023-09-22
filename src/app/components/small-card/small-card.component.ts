import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  smallPhotoCover: string = '';
  smallCardTitle: string = '';
  smallCardDescription: string = '';
  smallCardFullText: string = '';

  @Input()
  id: string = '';

  constructor() {}

  ngOnInit(): void {

    this.getData(this.id);
  }

  getData(id:string):void {
    const result = dataFake.filter((article) => article.id === id);

    this.smallPhotoCover = result[0].photo
    this.smallCardTitle = result[0].title;
    this.smallCardDescription = result[0].description;
    this.smallCardFullText = result[0].fullText;
  }
}
