import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Test1Component} from './test1.component';
import {PruebasService} from '../../services/pruebas.service';
import {of} from 'rxjs';
import {IUser} from '../../interfaces/iuser';
import {HttpClientTestingModule} from '@angular/common/http/testing';


/*
*
* Ciclo de vida de Pruebas con Jasmine
*
* beforeEach() Se ejecutara antes de cada IT
* afterEach()  Se ejecutara despues de cada IT
* beforeAll() Se ejecuta antes de cualquier IT, y solo una ves
* afterAll() Se ejecuta al finalizar todos los IT, y soolo una vez
*
*
*
* Paara ejecutar solo una prueba o enfocarse, se agrega al it, al inicio f,
* Al igual si se ienen varias pruebas en diversos compoentens, se le coloca al inicio f del describe principal
* ejemplo :
*  fit('Debe retornar True', function () {
  });
  *
  * Al igual que enfocar, para descartar una pruena o un describe al inicio se coloca una x
  * xfit('Debe retornar True', function () {
  });
* */


describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  let servicio;

  // Se jecuta antes de cada IT, cada caso de prueba
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test1Component],
      providers: [
        PruebasService,
        Test1Component
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    // Inicializando la variable, parra acceder a ella desde los IT
    component = TestBed.get(Test1Component);
    // Inicializamos el servicio
    servicio = TestBed.get(PruebasService);

  }));

  // Carga en la variable local el componente, para trabajar con el
  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente test1 Existe', () => {
    expect(component).toBeTruthy();
  });

  it('El valor de la variable saludo debe ser Hola Mundo', function () {
    let test1Component: Test1Component;
    let fixture: ComponentFixture<Test1Component>;

    fixture = TestBed.createComponent(Test1Component);
    test1Component = fixture.componentInstance;

    const valorSaludo = test1Component.saludo;
    // Valida el valor de la variable "saludo" en el componente sea igual al valor pasado por parametro
    expect(valorSaludo).toEqual('Hola Mundo');
  });


  it('La variale nombre debe contener el valor Gustavo ', function () {
    let test1Component: Test1Component;
    let fixture: ComponentFixture<Test1Component>;

    fixture = TestBed.createComponent(Test1Component);
    test1Component = fixture.componentInstance;

    const nombre = test1Component.nombre;
    // .toContain(contiene el valor pasado por parametro, similiar a like%) conincidencia
    expect(nombre).toContain('Gustavo!');
  });

  it('Debe retornar True', function () {
    let test1Component: Test1Component;
    let fixture: ComponentFixture<Test1Component>;

    fixture = TestBed.createComponent(Test1Component);
    test1Component = fixture.componentInstance;

    const numero = 10;
    const respuesta = test1Component.esPar(numero);

    // .toBeTruthy() verifica que el valor esperado sea true
    // .toBeFalsy()  verifica que el valor esoerado sea false
    expect(respuesta).toBeTruthy();

  });


  it('Debe llamar a PruebasService y el metodo getAllUsers() para obtener los usuarios', function () {

    let mockUser: IUser[];
    mockUser = [{
      login: 'mojombo',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mojombo',
      html_url: 'https://github.com/mojombo',
      followers_url: 'https://api.github.com/users/mojombo/followers',
      following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
      gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
      organizations_url: 'https://api.github.com/users/mojombo/orgs',
      repos_url: 'https://api.github.com/users/mojombo/repos',
      events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
      received_events_url: 'https://api.github.com/users/mojombo/received_events',
      type: 'User',
      site_admin: false
    },
      {
        'login': 'defunkt',
        'id': 2,
        'node_id': 'MDQ6VXNlcjI=',
        'avatar_url': 'https://avatars0.githubusercontent.com/u/2?v=4',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/defunkt',
        'html_url': 'https://github.com/defunkt',
        'followers_url': 'https://api.github.com/users/defunkt/followers',
        'following_url': 'https://api.github.com/users/defunkt/following{/other_user}',
        'gists_url': 'https://api.github.com/users/defunkt/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/defunkt/subscriptions',
        'organizations_url': 'https://api.github.com/users/defunkt/orgs',
        'repos_url': 'https://api.github.com/users/defunkt/repos',
        'events_url': 'https://api.github.com/users/defunkt/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/defunkt/received_events',
        'type': 'User',
        'site_admin': false
      }];


    const users = spyOn(servicio, 'getAllUsers').and.callFake(users => {
      return of(mockUser);
    });

    // Llamando al ngOnInit del componente, para inicializar el servicio
    component.ngOnInit();
    // Espera un resultado de users, que debio ser llamado con la funcion anterior
    expect(users).toHaveBeenCalled();

  });

});
