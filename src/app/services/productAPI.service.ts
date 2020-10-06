//https://localhost:44335/gateway/product
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class productAPIService
{
    constructor(private httpclient: HttpClient){}

    getProducts(): Observable<any>
    {
        return this.httpclient.get("https://localhost:44335/gateway/product");
    }

    getProduct(id: number): Observable<any>
    {
        var linkId = "https://localhost:44335/gateway/product/" + id;
        return this.httpclient.get(linkId);
    }
}