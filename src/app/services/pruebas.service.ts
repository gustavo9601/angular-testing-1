import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/iuser';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  url: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
  }


  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
