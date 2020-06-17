import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsRepartidorPage } from './tabs-repartidor.page';

describe('TabsRepartidorPage', () => {
  let component: TabsRepartidorPage;
  let fixture: ComponentFixture<TabsRepartidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsRepartidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsRepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
