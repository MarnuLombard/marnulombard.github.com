http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "img"
javascripts_dir = "js"
fonts_dir = http_path + "fonts"

relative_assets = true
preferred_syntax = :scss
Compass::BrowserSupport.add_support("function-name", "webkit", "moz", "o", "ms")



##----------------------##
##   Dev environment    ##
##----------------------##
# -- Uncomment for expanded, commented output for debugging
output_style = :expanded
environment = :development
line_comments = true  # source maps don't get output if this is true
sass_options = { :debug_info => true }


##--------------------------##
##  Production environment  ##
##--------------------------##
# -- Uncomment for compressed, uncommented output for server 
#output_style = :compressed
#environment = :production
#line_comments = false
#sass_options = { :debug_info => false }