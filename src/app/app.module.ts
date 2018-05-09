import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransfersComponent } from './transfers/transfers/transfers.component';
import { TransfersModule } from './transfers/transfers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TransfersModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TransfersComponent,
      },
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
