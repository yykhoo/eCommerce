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

    getProductbyId(id: number): Observable<any>
    {
        var linkId = "https://localhost:44335/gateway/product/id/" + id;
        return this.httpclient.get(linkId);
    }

    getProductbyCategoryId(categoryId: number): Observable<any>
    {
        var linkId = "https://localhost:44335/gateway/product/categoryId/" + categoryId;
        return this.httpclient.get(linkId);
    }
}