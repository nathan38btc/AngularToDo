import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class Calculationservice {
    muliply(x:number, y:number){
        return x*y;
    }
} 

