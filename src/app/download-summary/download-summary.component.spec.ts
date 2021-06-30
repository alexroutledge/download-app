import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadSummaryComponent } from './download-summary.component';
import { MatTableModule } from '@angular/material/table';

describe('DownloadSummaryComponent', () => {
  let component: DownloadSummaryComponent;
  let fixture: ComponentFixture<DownloadSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSummaryComponent ],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
