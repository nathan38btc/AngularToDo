import { Component } from "@angular/core";

@Component({
    selector:'Athentification',
    standalone: true,
    templateUrl: './Authentification.component.html',
    styleUrl: './Authentification.component.css'
})

export class AuthentificationComponent{
    Connected = false;

    OnConnection(){
        this.Connected = true;
    }
}