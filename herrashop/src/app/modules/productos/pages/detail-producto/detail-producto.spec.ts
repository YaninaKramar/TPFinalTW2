import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProducto } from './detail-producto';

describe('DetailProducto', () => {
  let component: DetailProducto;
  let fixture: ComponentFixture<DetailProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
