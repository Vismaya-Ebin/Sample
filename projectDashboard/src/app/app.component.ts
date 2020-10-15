
import { Component, HostListener, OnInit } from '@angular/core';

//import { HotkeysService, Hotkey } from 'angular2-hotkeys'; // tslint:disable-next-line: import-spacing
import {NumberConstant, }  from './keyboardevents.constants';
import {Constants} from './keyboardevents.constants';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
// export enum KEY_CODE {
//   REFINE_TEXT_BOX = 0,
//   WORK_QUEUE_LIST_ITEM = 1,
//   BROWSER_TAB = 2
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title1 = `Angular 9`;
  title = 'Work Load Management';
  //private _hotkeysService: HotkeysService,
 constructor(private route: ActivatedRoute, private _router: Router){

}
  ngOnInit(): void {
    //this.addHotKeys();
     // throw new Error('Method not implemented.');
  }

//  @HostListener('window:keyup', ['$event'])
//   keyEvent(event: KeyboardEvent) {
//     console.log(`EVENTS`, event);
//     console.log(`Router Events`, this._router);

//     if (parseInt(event.key) === Constants.ZERO) {
//       this._router.navigate(['home']);
//     }

//     if (parseInt(event.key) === Constants.ONE) {
//       this._router.navigate(['checkout']);

//     }
//     if (parseInt(eventkey) === Constants.TWO) {
//       window.close();
//       this._router.navigate(['orders']);
//     }
//     if (parseInt(event.key) === Constants.THREE) {
//       this._router.navig.ate(['projectDetail']);
//     }
//     if (parseInt(event.key) === Constants.FOUR) {
//       this._router.navigate(['familyDetails']);
//     }

//     if (parseInt(event.key) === Constants.FIVE) {
//       this._router.navigate(['reactForms']);
//     }
//     if (parseInt(event.key) === 13) {
//       this._router.navigate(['reactForms']);
//     }
//   }

  
//Hot Key Implementation
// addHotKeys() {
//   this._hotkeysService.add(new Hotkey(['option+q', 'ctrl+shift+d', 'option+c','enter'],
//                           (event: KeyboardEvent, combo: string): boolean => {
//                             console.log(`COmboooo--->`, combo);
//                             if (combo === 'ctrl+shift+a') {
//       this._router.navigate(['home']);
//     }
//                             if (combo === 'ctrl+shift+d') {
//       this._router.navigate(['home']);
// }
//                             if (combo === 'option+c') {
//   this._router.navigate(['familyDetails']);
// }
//                             return false;
//   }));
// }
  }

