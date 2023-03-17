import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Navigation } from './navigation.model';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  
  navigations:Navigation[] = [
    {
      link: 'customers',
      name: 'Customers',
      active: false
      
    },
    {
      link: 'dashboard',
      name: 'Dashboard',
      active: false
    }
  ];
 
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {

        if (event instanceof NavigationEnd) {
            this.navigations=this.navigations.map((nav)=>({...nav,active:event.url.includes(nav.link)}));
              console.log(event);
        }


    });

}

}
