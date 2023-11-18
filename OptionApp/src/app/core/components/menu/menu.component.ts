import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
type Menu = {
  link: string,
  title: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMenu: boolean = false;
  selectedMenu?: Menu ;
  menus: Menu[] = []

  constructor(
    private router: Router,
    private r: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menus = [
      { link: 'pages/pageOne', title: 'دیدبان بازار' },
      { link: 'pages/pageTwo', title: 'پیام ها' },
    ]
    this.selectedMenu=this.menus[0]
  }
  clickMenu(menu: any) {
    this.selectedMenu = menu;
    this.showMenu=!this.showMenu
    this.router.navigate([menu.link])
  }
  getClass(menu: any): string {
    return 'active'
  }
}
