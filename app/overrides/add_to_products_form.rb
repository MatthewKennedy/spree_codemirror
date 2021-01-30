Deface::Override.new(
  virtual_path: 'spree/admin/products/_form',
  name: 'add_code_mirror_js_to_product_form',
  insert_bottom: '[data-hook="admin_product_form_fields"]',
  partial: 'spree/admin/code_mirror/product_description'
)
