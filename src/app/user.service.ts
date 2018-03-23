import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {
  }

  getGoogle(): Observable<any> {
    return this._http.get('http://google.com');
  }

  handlerError(error: any): any {
    throw new Error('Method not implemented.');
  }

  goBack(message: any): void {

  }
}

