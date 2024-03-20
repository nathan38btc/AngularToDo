import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myApp';
  randomVar = 1;
  imageDePres ="https://www.01net.com/app/uploads/2023/12/explosion-bitcoin-causes.jpg";
  amies = ["Faire à manger","Lessive","Sortir les poubelles"];
  btcPrice= 60000;
  newTask = "";
  totalWalletValue = this.btcPrice*this.randomVar;

  AddOne(){
    this.randomVar++;
  }

  Reset(){
    this.randomVar = 1;
  }

  OnRDVChange(){
    this.totalWalletValue = this.btcPrice*this.randomVar;
  }

  AjoutALaToDo(event: any){
    this.amies.push(event.target.value);
  }

  EnleveALaToDo(event:any){
  }
} 
