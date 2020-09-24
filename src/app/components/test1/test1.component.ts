import {Component, OnInit} from '@angular/core';
import {PruebasService} from '../../services/pruebas.service';
import {IUser} from '../../interfaces/iuser';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public saludo: string;
  public nombre: string;


  users: IUser[] = [];

  constructor(private _pruebasAservice: PruebasService) {
    this.saludo = 'Hola Mundo';
    this.nombre = 'Gustavo!!';
  }

  ngOnInit() {
    this._pruebasAservice.getAllUsers().subscribe(
      (users) => {
        this.users = users;
        console.log("this.users", this.users);
      }
    );
  }

  esPar(numero: number) {
    return numero % 2 === 0;
  }

}
