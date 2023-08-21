import { ITecnologias } from './../model/ITecnologias';
import { Component } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  listaTecnologias: ITecnologias[] = [
    {
      nome: 'Inteligência Artificial ' ,
      texto: 'A Inteligência Artificial (IA) refere-se à criação de sistemas e algoritmos capazes de realizar tarefas que normalmente exigiriam inteligência humana'
    },
    {
      nome: 'Aplivativo de Transporte' ,
      texto: 'Aplicativos de transporte revolucionaram a maneira como as pessoas se locomovem, oferecendo conveniência e acessibilidade através de plataformas que conectam passageiros a motoristas particulares ou serviços de táxi.'
    },
    {
      nome: 'Aplivativo de Saúde Pessoal' ,
      texto: 'Aplicativos de saúde pessoal proporcionam ferramentas para monitoramento e gerenciamento da saúde individual. Eles abrangem desde rastreamento de atividades físicas e contagem de calorias até monitoramento de sinais vitais'
    }
    ,
    {
      nome: 'Aprendizado online' ,
      texto: 'Plataformas de aprendizado online revolucionaram a educação, proporcionando acesso a uma variedade de cursos e materiais educativos pela internet'
    }
  ]

    
  exibirTecnologia(tecnologia: ITecnologias){
    const navigationExtras: NavigationExtras = {state:{paramTecnologia:tecnologia}};
    this.router.navigate(['tecnologia-detalhe'], navigationExtras)
  }

}
