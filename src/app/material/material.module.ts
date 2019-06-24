import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule,
  
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatTableModule,
    MatExpansionModule,

    MatInputModule,
    MatDatepickerModule,

    MatNativeDateModule,
    BrowserAnimationsModule,

    MatButtonModule,
  ],
  exports: [
    MatTableModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,

    MatInputModule,
    MatDatepickerModule,

    MatNativeDateModule,
    BrowserAnimationsModule,

    MatButtonModule,
  ]
})
export class MaterialModule { }
