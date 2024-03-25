/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

export type Category = {
  id: string;
  name: string;
  photo?: string;
}

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}

export type Operation = Cost | Profit;

export type OperationBase = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
}
export type Cost = OperationBase & { type: 'Cost' }
export type Profit = OperationBase & { type: 'Profit' }

const categoryFirst: Category = {
  id: 'one',
  name: 'First',
};

const categorySecond: Category = {
  id: 'two',
  name: 'Second',
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const randomNumber = Math.random();
  const price = Math.floor(randomNumber * 100) + 1;
  const id = `${randomNumber}`;

  return {
    id,
    createdAt,
    price,
    name: `new_product_${id}`,
    photo: `https://source.unsplash.com/random/200x200?sig=${id}`,
    category: price > 50 ? categoryFirst : categorySecond,
  }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const randomNumber = Math.random();
  const amount = Math.floor(randomNumber * 100) + 1;
  const id = `${randomNumber}`;

  return {
    id,
    createdAt,
    amount,
    name: `new_operation_${id}`,
    category: amount > 50 ? categoryFirst : categorySecond,
    type: amount > 50 ? 'Cost' : 'Profit',
  }
};
