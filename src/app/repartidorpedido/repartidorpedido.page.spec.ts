import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartidorpedidoPage } from './repartidorpedido.page';

describe('RepartidorpedidoPage', () => {
  let component: RepartidorpedidoPage;
  let fixture: ComponentFixture<RepartidorpedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorpedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartidorpedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
