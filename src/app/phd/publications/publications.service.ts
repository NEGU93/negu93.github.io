import { IPublication } from "./publications";
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PublicationService {
    private publicationsUrl = 'assets/publications.json';
    constructor (private http: HttpClient) {}

    getPublications(): Observable<IPublication[]> {
        return this.http.get<IPublication[]>(this.publicationsUrl).pipe(
            tap(data=>console.log('All: ' + JSON.stringify(data))), 
            catchError(this.handleError)        
            );
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`; 
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}