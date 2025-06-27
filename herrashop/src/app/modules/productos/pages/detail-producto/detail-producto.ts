import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-detail-producto',
  imports: [],
  templateUrl: './detail-producto.html',
  styleUrl: './detail-producto.css'
})
export class DetailProducto implements OnInit, OnDestroy {

  productoService = inject(ProductoService); 

  activatedRouter = inject(ActivatedRoute);

  id: number | null = null;

  producto: Producto | undefined;

  ngOnInit() {
    this.id = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    this.getProducto();  
  }

  ngOnDestroy(): void {
    
  }

  getProducto() {
      this.productoService.getProducto(this.id).subscribe(
        {
          next : (data)=>{
            this.producto = data;
            console.log(data);
          }, 

        error: (err) => {},

        complete: () => {}
      }
    );
  }

}
