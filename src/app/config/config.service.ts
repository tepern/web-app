import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/users';

  getConfig() {

    const data$ = fetch(this.configUrl).then(response => {

        if (response.status !=200) {
            return null;
        }  else {
           return response.json();
        }
    },
    failResponse => {
       return null;
    });

    return data$;

  }

}