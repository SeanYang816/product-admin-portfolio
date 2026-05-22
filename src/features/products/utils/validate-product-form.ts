import type { ProductFormValues } from '../types/product';

export type ProductFormErrors = {
  name?: string;
  price?: string;
};

export function validateProductForm(values: ProductFormValues) {
  const errors: ProductFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Product name is required.';
  }

  if (!values.price.trim()) {
    errors.price = 'Price is required.';
  } else if (Number(values.price) <= 0) {
    errors.price = 'Price must be greater than 0.';
  }

  return errors;
}
