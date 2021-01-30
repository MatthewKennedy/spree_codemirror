Deface::Override.new(
  virtual_path: 'spree/admin/posts/_form',
  name: 'add_code_mirror_js_to_spree_blog_post',
  insert_bottom: '[data-hook="spree-blog-post-form"]',
  partial: 'spree/admin/code_mirror/blog_post'
)
