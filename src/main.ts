import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Components/app/app.config';
import { AppComponent } from './app/Components/app/app.component';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
