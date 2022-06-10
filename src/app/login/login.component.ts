import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public usuario!: string;
   public password!: string;
  
   
  
  constructor(public router: Router) { }
 

  ngOnInit(): void {
  }

  
  
  login(){
    
    if (this.password == "test01" && this.usuario == "test01"){
      console.log("dato correcto");
      this.router.navigate(['../tareas'])
      
    }else{ 
      console.log("error datos");
      window.alert('Dato incorrecto, intente nuevamente');
      }
    

  }
}
