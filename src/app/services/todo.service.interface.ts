import { Observable } from "rxjs";
import { Todo } from "../models/todo.model";

export interface ITodoService{
    getData() : Observable<Todo[]>;
}