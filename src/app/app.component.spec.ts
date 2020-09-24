import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Test1Component} from './components/test1/test1.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Test1Component
      ],
      providers: [
        AppComponent,
        Test1Component
      ]
    }).compileComponents();
  }));

  // Valida que se cree el componente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // Valida que contenga el nombre de la app en el nombre en la pagina del componente app
  it(`should have as title 'pruebasTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebasTesting');
  });

  // Verifica que dentro del html , exita una etiqueta h1, uqe contenga el texto definido
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pruebasTesting!');
  });
});
