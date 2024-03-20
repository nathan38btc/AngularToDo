import { NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AuthentificationComponent } from "../Authentification/Authentification.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@NgModule({
    imports: [BrowserModule,FormsModule,HttpClientModule,AuthentificationComponent,CommonModule,RouterOutlet],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})

export class AppModule {}
