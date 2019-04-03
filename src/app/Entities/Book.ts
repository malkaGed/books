import { Component, OnInit } from '@angular/core';

export class Book implements OnInit {
  Id:number;
  Title:string;
  Author:string;
  PublishingDate:Date;

  constructor() { }

  ngOnInit() {
  }

}
