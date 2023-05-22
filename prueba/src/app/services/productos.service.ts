import { Injectable } from '@angular/core';
import { Producto } from 'src/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  obtenerProductos() {
    return this.productos;
  }
}

