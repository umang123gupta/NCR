import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  BASE_URL : string = environment.base_Url;

  constructor(private http: HttpClient) { }

  get<T>(url:string) : Observable<T> {
    return this.http.get<T>(this.BASE_URL + url);
  }

  post<T>(url:string, body:any) : Observable<T>{
    return this.http.post<T>(this.BASE_URL + url, body);
  }

  put<T>(url:string, body:any) : Observable<T>{
    return this.http.put<T>(this.BASE_URL + url , body);
  }

  delete<T>(url:string) : Observable<T>{
    return this.http.delete<T>(this.BASE_URL + url)
  }

  patch<T>(url:string, body:any) : Observable<T>{
    return this.http.patch<T>(this.BASE_URL + url , body);
  }

}
