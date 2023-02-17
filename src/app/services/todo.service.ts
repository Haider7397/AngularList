import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ITodoService } from './todo.service.interface';
import { Todo } from '../models/todo.model';
import data from '../data/data.json'

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {

  public mock:Todo[]=[];

  constructor() { 
    this.mock = data
  }

  getData(){
    return of(this.mock);
  }
}
