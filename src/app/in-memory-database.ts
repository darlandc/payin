import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categoria } from './pages/cat/shared/categoria.model';

export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
    const categorias: Categoria = [
      { id: 1, nome: 'Alimentação' },
      { id: 2, nome: 'Bebidas' }
    ];
    return { categorias };
  }

}
