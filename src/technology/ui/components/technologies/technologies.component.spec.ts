import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TechnologiesComponent } from './technologies.component';

describe('TechnologiesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TechnologiesComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TechnologiesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
