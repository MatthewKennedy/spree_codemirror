Deface::Override.new(
  virtual_path: 'spree/admin/products/_form',
  name: 'add_product_desc_to_product_form',
  insert_bottom: '[data-hook="admin_product_form_fields"]',
  partial: 'spree/admin/shared/product_desc'
)
