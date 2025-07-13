import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [],
    exports: [
        FormsModule, ReactiveFormsModule, CommonModule,
        RouterModule, MaterialModule, DragDropModule
    ],
    declarations: [],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'tr' }]
})
export class UtilsModule { }
