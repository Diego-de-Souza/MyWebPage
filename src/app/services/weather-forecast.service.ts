import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any>{
    const url = environment.api_url_tempo+`/api/v1/anl/synoptic/locale/`+city+`?token=`+environment.api_token_tempo;

    return this.http.get<any>(url,{headers: {api: environment.api}})
    .pipe(
      catchError((error)=> this.handleError(error))
    );
  }

  private handleError(error: any): Observable<never>{
    console.error('Error:', error);
    return throwError(()=> new Error('Algo deu errado com a solicitação.'))
  }
}
