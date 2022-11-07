import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  create(todoItem: ToDoItem): Observable<void> {
    return this.http.post<void>('https://localhost:5001/ToDos', todoItem)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:5001/ToDos?id=${id}`)
  }
}
