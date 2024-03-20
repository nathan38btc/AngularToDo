import { Component } from "@angular/core";
import { UserModele, DatabaseService } from "./../../Services/dataBaseConnexion/database.service";
import { HttpClient } from "@angular/common/http";

@Component({

    selector:'Athentification',
    standalone: true,
    templateUrl: './Authentification.component.html',
    styleUrl: './Authentification.component.css',
})

export class AuthentificationComponent{

    Connected = false;
    userData: UserModele[];
    
    constructor(private dbService: DatabaseService){ 
        this.userData = [];
    }

    ConnectionToDataBase(){
        //this.dbService.getAllUsers();
        console.log("we movin in " );
    }

    
}