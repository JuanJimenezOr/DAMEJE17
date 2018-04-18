import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuoteService{
    public data:any;

    constructor(private http:Http){

    }

    getQuotes(){
        this.http.get(" http://127.0.0.1:8080").subscribe(

        res=>{
            this.data=res.json();
            console.log(this.data);
        },
        error=>{
            console.log(error);
        }
    );
    }
 }
