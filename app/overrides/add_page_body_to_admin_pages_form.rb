Deface::Override.new(
  virtual_path: 'spree/admin/pages/_form',
  name: 'add_page_body_to_page_form',
  insert_bottom: '[data-hook="admin_page_form_fields"]',
  partial: 'spree/admin/shared/page_body'
)
