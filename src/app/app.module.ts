import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AskForDeleteComponent } from './core/ask-for-delete/ask-for-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserModule } from './user/user.module';
import { MatButtonModule } from '@angular/material/button';
import { SuccessOperationComponent } from './core/success-operation/success-operation.component';
import { EchecOperationComponent } from './core/echec-operation/echec-operation.component';
import { SiteModule } from './site/site.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { VisiteModule } from './visite/visite.module';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AskForDeleteComponent,
    SuccessOperationComponent,
    EchecOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    RouterModule,
    MatDialogModule,
    UserModule,
    HttpClientModule,
    MatButtonModule,
    SiteModule,
    MatTooltipModule,
    VisiteModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
