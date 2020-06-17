import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartidorpedidoDetallePage } from './repartidorpedido-detalle.page';

describe('RepartidorpedidoDetallePage', () => {
  let component: RepartidorpedidoDetallePage;
  let fixture: ComponentFixture<RepartidorpedidoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorpedidoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartidorpedidoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
