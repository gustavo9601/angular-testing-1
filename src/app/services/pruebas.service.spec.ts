import {TestBed, getTestBed} from '@angular/core/testing';

import {PruebasService} from './pruebas.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {IUser} from '../interfaces/iuser';



describe('PruebasService', () => {


  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ]
      }
    );

    // Se inicializa antes de cada it para tener acceso a ellas
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

  });


  afterEach(() => {
    // Verificara que desdepues de cada it no halla request pendientes por resolver despues de cada it
    httpMock.verify();
  });


  it('Debe ser creado el servicio pruebas', () => {
    // Instancia del servicio
    const service: PruebasService = TestBed.get(PruebasService);
    expect(service).toBeTruthy();
  });

  it('Debe retornar un observable<User[]>', function () {
    // Creando la instancia del servicio
    const _servicePruebas: PruebasService = TestBed.get(PruebasService);

    // Objeto simulado de la respuesta
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

    // Supcripcion de la funcion del servicio
    _servicePruebas.getAllUsers().subscribe(
      (users) => {
        // Verifica que el total de usuarios retornado sea igual a 10
        expect(users.length).toBe(10);
        // Verifica que la respuesta de usuarios sea igual a la variable global
        expect(mockUser).toEqual(users);
        // Probando que el valor, para este caso la llave no sea undefined o null
        expect(users[0].login).toBeDefined();
      });

    // Verifica que se realice una peticion a la url pasada por parametro
    const requestGitHub = httpMock.expectOne('https://api.github.com/users');
    console.log('requestGitHub', requestGitHub);
    // Verificando que la peticion halla sido de tipo GET
    expect(requestGitHub.request.method).toBe('GET');
    // Proporciona valores ficticios como respuesta de nuestas peticiones como respuesta
    requestGitHub.flush(mockUser);


  });

});
