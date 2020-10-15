import { ContactService } from './../service/contact.service';
import { Component, OnInit , OnChanges,ViewChild, AfterViewInit, SimpleChanges} from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnChanges{
  numOfItems: number;
  userInput;
  projectDetails = ``;
  dataToList;
  project = [];
  copyOfProject;
  showDetails = false;
  locName = '';
  sampleArray = [
    {id: 1 , project : 'Angular'},
    {id: 2 , project : 'React'},
    {id: 3 , project : 'Angular'},

  ];
  ;
show;
  constructor(private contactService: ContactService,
    private commonService: CommonService) {
    this.contactService.isChecked.subscribe(data =>{
      this.show = data;

    })
   }
  ngOnChanges(changes: SimpleChanges): void {
  

    throw new Error('Method not implemented.');
  }
 
  ngOnInit(): void {
    this.numOfItems = this.project.length;
    if(this.numOfItems)alert('Have Values');
    this.getNameOfTheComonent();
    const filterArray = this.sampleArray.filter(data => data.project !== data[0]['project'])
  }
  clicked(){
  
  }
  checkBox(data){
    
    this.contactService.isChecked.next('Helloooo');
  }
  clearAll(){
    this.project = [];
    this.numOfItems = 0;
  }
  addTask(){
    this.project.push(this.projectDetails);
    this.numOfItems = this.project.length;
   
  }
  removeItem(i){

    const copyArray = [...this.project];
   
    copyArray.splice(i, 1);
   
    this.numOfItems = copyArray.length;
   
    this.project = copyArray;
  }
  getNameOfTheComonent(){
    this.commonService.setLocationName('Am  Home Page');
    let locNames = this.commonService.getLocation();
  }

}
