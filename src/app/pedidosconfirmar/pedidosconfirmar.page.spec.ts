import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosconfirmarPage } from './pedidosconfirmar.page';

describe('PedidosconfirmarPage', () => {
  let component: PedidosconfirmarPage;
  let fixture: ComponentFixture<PedidosconfirmarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosconfirmarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosconfirmarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
