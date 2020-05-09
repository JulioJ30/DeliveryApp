import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DireccionesempresasPage } from './direccionesempresas.page';

describe('DireccionesempresasPage', () => {
  let component: DireccionesempresasPage;
  let fixture: ComponentFixture<DireccionesempresasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionesempresasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionesempresasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
