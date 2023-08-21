import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologia-detalhe',
  templateUrl: './tecnologia-detalhe.page.html',
  styleUrls: ['./tecnologia-detalhe.page.scss'],
})
export class TecnologiaDetalhePage implements OnInit {

  view:any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state){
        this.view = getNav.extras.state['paramTecnologia']
      }
    })
  }


}
