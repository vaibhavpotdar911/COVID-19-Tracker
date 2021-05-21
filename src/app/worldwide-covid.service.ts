import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorldwideReports } from '../worldwideReports';

@Injectable({
  providedIn: 'root'
})
export class WorldwideCovidService {

  constructor(public http:HttpClient) { }

  public worldwideReports(): Observable<WorldwideReports[]> {
    return this.http.get<WorldwideReports[]>("https://api.caw.sh/v3/covid-19/all");
  }

  public worldwideVaccination() {
    return this.http.get("https://covid-api.mmediagroup.fr/v1/vaccines");
  }
}
