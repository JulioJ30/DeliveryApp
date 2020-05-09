import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductrestaurantesPage } from './productrestaurantes.page';

describe('ProductrestaurantesPage', () => {
  let component: ProductrestaurantesPage;
  let fixture: ComponentFixture<ProductrestaurantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductrestaurantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductrestaurantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
