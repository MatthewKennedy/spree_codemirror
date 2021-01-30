Deface::Override.new(
  virtual_path: 'spree/admin/pages/_form',
  name: 'add_code_mirror_js_to_page_form',
  insert_bottom: '[data-hook="spree-pages-form"]',
  partial: 'spree/admin/code_mirror/page'
)
