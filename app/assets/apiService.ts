import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor (private http:HttpClient){}

    getCountryInfo(countryId: string): Observable<any> {
        const testURL = `https://api.worldbank.org/V2/country/${countryId}?format=json`;
        return this.http.get(testURL);
    }

}
