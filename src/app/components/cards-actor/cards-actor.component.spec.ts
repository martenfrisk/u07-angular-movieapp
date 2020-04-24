import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsActorComponent } from './cards-actor.component';

describe('CardsActorComponent', () => {
  let component: CardsActorComponent;
  let fixture: ComponentFixture<CardsActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
