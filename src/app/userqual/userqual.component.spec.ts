import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserqualComponent } from './userqual.component';

describe('UserqualComponent', () => {
  let component: UserqualComponent;
  let fixture: ComponentFixture<UserqualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserqualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserqualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
