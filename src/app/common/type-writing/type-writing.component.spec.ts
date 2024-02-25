import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWritingComponent } from './type-writing.component';

describe('TypeWritingComponent', () => {
  let component: TypeWritingComponent;
  let fixture: ComponentFixture<TypeWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeWritingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
