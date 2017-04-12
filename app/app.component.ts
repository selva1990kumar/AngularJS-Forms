import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h1>Routing Application</h1>
              <nav>
                <a routerLink="/angulartemplateform" routerLinkActive="active">Angular Forms Using Template</a>
                <a routerLink="/angularmoduleformdata" routerLinkActive="active">Angular Forms Using Model</a>
                <a routerLink="/angularmodulebuilder" routerLinkActive="active">Angular Forms Using Form Builder</a>
              </nav>              
              <router-outlet></router-outlet>
  `
})
export class AppComponent {

}

