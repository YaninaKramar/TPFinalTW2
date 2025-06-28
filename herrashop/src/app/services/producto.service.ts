import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Producto } from '../modules/productos/interfaces/producto.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
    http = inject(HttpClient);
    
    constructor() {}

    getProducto(id: number): Observable<Producto> {
        let headers = new HttpHeaders();

      headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    )

    return this.http.get<Producto>(`${environment.api_url}/productos/${id}`, 
        { headers })
        .pipe(
        map((res) => {
        return res;
      })
    );
}
}