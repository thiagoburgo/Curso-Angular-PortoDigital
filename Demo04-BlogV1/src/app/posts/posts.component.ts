import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  date: Date = new Date();
  posts: any[] = [
    {
      title: 'Titulo de teste 1',
      author: 'Burgo',
      body: `
        ${this.date}
        Meu corpo de teste
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo,
        laboriosam magnam rem quis quaerat quisquam recusandae eaque animi molestias
        ducimus, itaque quos maxime adipisci voluptatum labore ad aperiam quibusdam.
      `
    },
    {
      title: 'Titulo de teste 2',
      author: 'Burgo',
      body: `
        ${this.date}
        Meu corpo de teste
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo,
        laboriosam magnam rem quis quaerat quisquam recusandae eaque animi molestias
        ducimus, itaque quos maxime adipisci voluptatum labore ad aperiam quibusdam.
      `
    },
    {
      title: 'Titulo de teste 3',
      author: 'Burgo',
      body: `
        ${this.date}
        Meu corpo de teste
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo,
        laboriosam magnam rem quis quaerat quisquam recusandae eaque animi molestias
        ducimus, itaque quos maxime adipisci voluptatum labore ad aperiam quibusdam.
      `
    },
    {
      title: 'Titulo de teste 4',
      author: 'Burgo',
      body: `
        ${this.date}
        Meu corpo de teste
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo,
        laboriosam magnam rem quis quaerat quisquam recusandae eaque animi molestias
        ducimus, itaque quos maxime adipisci voluptatum labore ad aperiam quibusdam.
      `
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
