import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnologiaDetalhePageRoutingModule } from './tecnologia-detalhe-routing.module';

import { TecnologiaDetalhePage } from './tecnologia-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnologiaDetalhePageRoutingModule
  ],
  declarations: [TecnologiaDetalhePage]
})
export class TecnologiaDetalhePageModule {}
