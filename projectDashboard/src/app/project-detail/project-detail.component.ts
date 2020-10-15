import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../service/project.service';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectDetails = [];
  isFav  = true;
  IsChecked = true;
  show = '';
  task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };

  constructor(private service: ProjectService,
              private cs: ContactService) {
      this.cs.isChecked.subscribe(data => {
       
        this.show = data;
       });
   }
   updateAllComplete(onChange){
     
   }
  ngOnInit(): void {
   this.projectDetails = this.service.fetchProjectData();

  }

  iconClicked(){
    this.isFav = !this.isFav;
  }

}
