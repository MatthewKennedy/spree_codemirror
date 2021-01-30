Deface::Override.new(
  virtual_path: 'spree/admin/pages/_form',
  name: 'add_code_mirror_js_to_static_content_pages',
  insert_bottom: '[data-hook="admin_page_form_fields"]',
  partial: 'spree/admin/code_mirror/static_content'
)
