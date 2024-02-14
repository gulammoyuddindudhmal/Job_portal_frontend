import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinJobsListComponent } from './walkin-jobs-list.component';

describe('WalkinJobsListComponent', () => {
  let component: WalkinJobsListComponent;
  let fixture: ComponentFixture<WalkinJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalkinJobsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkinJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
