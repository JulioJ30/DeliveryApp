import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DireccionesusuariosPage } from './direccionesusuarios.page';

describe('DireccionesusuariosPage', () => {
  let component: DireccionesusuariosPage;
  let fixture: ComponentFixture<DireccionesusuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionesusuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionesusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
