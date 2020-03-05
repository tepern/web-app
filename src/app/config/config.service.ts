import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/users';

  getConfig() {

    const data$ = fetch(this.configUrl).then(response => response.json());

    //return this.http.get(this.configUrl);

    console.log(data$);

    //let result = Promise.all(data$)
    
    return data$;

    //data$.subscribe({
      //next: result => console.log(result),
      //complete: () => console.log('done')
    //})


  }

}