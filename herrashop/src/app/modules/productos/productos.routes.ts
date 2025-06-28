import { Routes } from '@angular/router';
import { DetailProducto } from './pages/detail-producto/detail-producto';

export const productosRoutes: Routes = [
  {

     path : '',
     children: [

    {
     path: 'detalle-producto/:id',
     component: DetailProducto
   }
    ]
    }
];