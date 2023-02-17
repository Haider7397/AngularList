import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data:Todo[]=[];

  constructor(private service:TodoService) { }

  ngOnInit(): void {
    this.getData();
  }

  createRange(number:number){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  getData(){
    this.service.getData().subscribe((resp)=>{
      this.data = resp;
      console.log(this.data)
    })
  }
}
