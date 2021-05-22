import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Covid19apiService {

  constructor(public http:HttpClient) { }

  public covid19Reports() {
    return this.http.get("https://corona.lmao.ninja/v3/covid-19/countries");
  }

  public covid19IndiaData() {
    const httpHeaders = new HttpHeaders({
      "x-rapidapi-key": "c04c3e3029msh389f94fa03a12aap114a50jsnf7a58dcd4ef9",
	"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
    });
    return this.http.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {headers: httpHeaders});
  }

}
