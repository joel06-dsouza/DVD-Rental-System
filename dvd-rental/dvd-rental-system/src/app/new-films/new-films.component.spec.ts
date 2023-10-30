import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:dvd-rental/dvd-rental-system/src/app/logout/logout.component.spec.ts
import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent]
    });
    fixture = TestBed.createComponent(LogoutComponent);
========
import { NewFilmsComponent } from './new-films.component';

describe('NewFilmsComponent', () => {
  let component: NewFilmsComponent;
  let fixture: ComponentFixture<NewFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFilmsComponent]
    });
    fixture = TestBed.createComponent(NewFilmsComponent);
>>>>>>>> f39ecf6634cca2c99849ee8bd51a96844694f2c6:dvd-rental/dvd-rental-system/src/app/new-films/new-films.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
