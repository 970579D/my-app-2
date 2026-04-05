import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface IQueue {
  queueNo: number;
  queueLabel: string;
  date: Date;
}

export interface IResponse {
  message: string;
  status: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:5182/Reserve"

  generateQueue = (): Observable<IResponse> => {
    return this.http.get<IResponse>(`${this.url}/GenerateQueue`);
  };

  checkClearQueue = (): Observable<IResponse> => {
    return this.http.get<IResponse>(`${this.url}/CheckExistQueue`);
  };

  clearQueue = (): Observable<IResponse> => {
    return this.http.get<IResponse>(`${this.url}/ClearQueue`);
  };

  findLastQueue = (): Observable<IResponse> => {
    return this.http.get<IResponse>(`${this.url}/FindLastQueue`);
  };
}