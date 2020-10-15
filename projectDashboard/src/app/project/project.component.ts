import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  comments = [];
  detailsData = [];
  // tslint:disable-next-line: variable-name
  constructor(
    private _projectService: ProjectService,
    private route: ActivatedRoute,
    private _router : Router
  ) {
    this.route.queryParamMap.subscribe((params) =>
      console.log(params.get('id'))
    );
  }
  @Input() details: any;
  @Input() show: any;

  ngOnInit(): void {
    this._projectService.getJsonData().subscribe((data) => {
      this.comments = data;
      console.log('Coments', this.comments);
    });
  }

  thankYou(){
  this._router.navigate(['home']);
  }
}
