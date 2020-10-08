//https://localhost:44335/gateway/category
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class categoryAPIService
{
    constructor(private httpclient: HttpClient){}

    getcategories(): Observable<any>
    {
        return this.httpclient.get("https://localhost:44335/gateway/category");
    }

    getcategorybyId(id: number): Observable<any>
    {
        var linkId = "https://localhost:44335/gateway/category/id/" + id;
        return this.httpclient.get(linkId);
    }
}