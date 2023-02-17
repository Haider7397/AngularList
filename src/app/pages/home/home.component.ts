import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: Data[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getData();
  }

  createRange(number: number) {
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  getData() {
    this.service.getData().subscribe((resp) => {
      this.addDetails(resp);
    })
  }

  addDetails(resp: any) {
    this.data.forEach((elem: any) => {
      elem.details = false;
    })
    this.data = resp;
  }

  show(index: number) {
    this.data[index].details = true;
  }

  hide(index: number) {
    this.data[index].details = false;
  }

  trackValue(event: any) {
    console.log(event.target.value)
    if (event.target.value == "") {
      this.getData();
    }
    else {
      this.data = this.data.filter((elem: any) => {
        return elem.price < parseInt(event.target.value)
      })
    }
  }

}
