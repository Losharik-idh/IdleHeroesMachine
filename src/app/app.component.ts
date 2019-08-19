import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IdleHeroesMachine';


  constructor(private router: Router) {
    // console.log(router);
    // document.querySelector('body').addEventListener('click', this.next);
  }

  public next = () => {
    // this.getCurrentNavigationId(router.url)
    // // router.navigate(['/about']);
    // console.log(router);
  }

  private getCurrentNavigationId(url) {

  }
}
