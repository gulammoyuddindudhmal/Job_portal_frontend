import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinJobsComponent } from './walkin-jobs.component';

describe('WalkinJobsComponent', () => {
  let component: WalkinJobsComponent;
  let fixture: ComponentFixture<WalkinJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalkinJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkinJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
