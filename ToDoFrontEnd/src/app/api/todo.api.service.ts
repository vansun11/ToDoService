import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private baseUrl = 'https://localhost:5001/ToDos'

  constructor(private http: HttpClient) { }

  create(todoItem: ToDoItem): Observable<void> {
    return this.http.post<void>(this.baseUrl, todoItem);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}?id=${id}`);
  }

  findById(id: number): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${this.baseUrl}/${id}`);
  }
}
