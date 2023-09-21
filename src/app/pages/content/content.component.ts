import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/10/Tony-Stark-Homem-de-Ferro.jpg';
  contentTitle: string = 'Minha Notícia';
  contentDescription: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta distinctio atque at odit mollitia illum provident officia rem explicabo. Eum enim dignissimos quos? Cupiditate reiciendis sint consectetur illo similique.';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get("id")));
  }

}
