
import { v4 as uuid } from 'uuid'
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED:Brand[] = [
    {
      id: uuid(),
      name: 'toyota',
      createdAt: new Date().getTime()
    },
    {
      id: uuid(),
      name: 'honda',
      createdAt: new Date().getTime()
    },
    {
      id: uuid(),
      name: 'ford',
      createdAt: new Date().getTime()
    },
]; 
