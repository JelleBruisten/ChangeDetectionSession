import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: 'simple',
        loadComponent: () =>
          import('./simple/simple.component').then((m) => m.SimpleComponent),
      },
      {
        path: 'input',
        loadComponent: () =>
          import('./input/input.component').then((m) => m.InputComponent),
      },
      {
        path: 'pipe',
        loadComponent: () =>
          import('./pipe/pipe.component').then((m) => m.PipeComponent),
      },
      {
        path: 'trackBy',
        loadComponent: () =>
          import('./trackby/trackby.component').then((m) => m.TrackbyComponent),
      },
      {
        path: 'expression-already-changed',
        loadComponent: () =>
          import(
            './expression-already-changed/expression-already-changed.component'
          ).then((m) => m.ExpressionAlreadyChangedComponent),
      },
      {
        path: 'manual',
        loadComponent: () =>
          import('./manual/manual.component').then((m) => m.ManualComponent),
      },
      {
        path: '**',
        redirectTo: 'simple',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
