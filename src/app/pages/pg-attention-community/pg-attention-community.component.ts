import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg-attention-community',
  template: `
  <div class="page">
  <nav class="page-nav">
      <ul>
          <li routerLink="casos-activos" routerLinkActive="active">
              Casos activos
          </li>
          <li routerLink="historial" routerLinkActive="active">
              Historial
          </li>
          <li routerLink="estadisticas" routerLinkActive="active">
              estadisticas
          </li>
          <!-- <li>
              Seguridad
          </li> -->
      </ul>
  </nav>
  <div class="page-content">
      <router-outlet></router-outlet>
  </div>
</div>`
})
export class PgAttentionCommunityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
