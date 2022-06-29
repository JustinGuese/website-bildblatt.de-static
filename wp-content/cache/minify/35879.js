!function(i,t,n){function e(t){var e=this;e.$form=t,e.$wrapper=t.closest(wc_gzd_add_to_cart_variation_params.wrapper),e.$product=t.closest(".product"),e.variationData=t.data("product_variations"),e.$singleVariation=t.find(".single_variation"),e.$singleVariationWrap=t.find(".single_variation_wrap"),e.$resetVariations=t.find(".reset_variations"),e.$button=t.find(".single_add_to_cart_button"),e.$form.addClass("has-gzd-variation-form"),e.$form.off(".wc-gzd-variation-form"),e.$wrapper.length<=0&&(e.$wrapper=e.$product),e.replacePrice=!e.$wrapper.hasClass("bundled_product")&&wc_gzd_add_to_cart_variation_params.replace_price,t.on("click.wc-gzd-variation-form",".reset_variations",{GermanizedvariationForm:e},e.onReset),t.on("reset_data.wc-gzd-variation-form",{GermanizedvariationForm:e},e.onReset),t.on("show_variation.wc-gzd-variation-form",{GermanizedvariationForm:e},e.onShowVariation),e.$wrapper.find(".woocommerce-product-attributes-item--food_description, .woocommerce-product-attributes-item--alcohol_content, .woocommerce-product-attributes-item--net_filling_quantity, .woocommerce-product-attributes-item--drained_weight, .woocommerce-product-attributes-item--food_place_of_origin, .woocommerce-product-attributes-item--food_distributor").each(function(){var t=i(this);t.find(".woocommerce-product-attributes-item__value").is(":empty")&&t.addClass("wc-gzd-additional-info-placeholder")})}e.prototype.getPriceElement=function(t){return t.$wrapper.find(wc_gzd_add_to_cart_variation_params.price_selector+":not(.price-unit):visible").not(".variations_form .single_variation .price").first()},e.prototype.onReset=function(t){var e=t.data.GermanizedvariationForm.$wrapper;e.find(".variation_gzd_modified").each(function(){i(this).wc_gzd_reset_content()}),e.find(".variation_gzd_modified").remove(),t.data.GermanizedvariationForm.$form.trigger("germanized_reset_data")},e.prototype.onUpdate=function(t){setTimeout(function(){void 0!==t.data&&t.data.hasOwnProperty("GermanizedvariationForm")&&void 0!==t.data.GermanizedvariationForm&&(t.data.GermanizedvariationForm.$button.is("[disabled]")||t.data.GermanizedvariationForm.$button.hasClass("disabled"))&&t.data.GermanizedvariationForm.onReset(t)},250)},e.prototype.onShowVariation=function(t,e,i){var n=t.data.GermanizedvariationForm,o=n.$wrapper,d=e.hasOwnProperty("price_html")&&""!==e.price_html,t=e.hasOwnProperty("display_price")&&""!==e.display_price;d&&n.replacePrice&&(d=n.getPriceElement(n),n.$singleVariation.find(".price").hide(),d.wc_gzd_set_content(e.price_html),d.find(".price").contents().unwrap()),""!==e.delivery_time?o.find("p.delivery-time-info").wc_gzd_set_content(e.delivery_time):o.find("p.delivery-time-info").wc_gzd_reset_content(),""!==e.defect_description?o.find("p.defect-description").wc_gzd_set_content(e.defect_description):o.find("p.defect-description").wc_gzd_reset_content(),""!==e.tax_info&&t?o.find(".tax-info").wc_gzd_set_content(e.tax_info):o.find(".tax-info").wc_gzd_reset_content(),""!==e.deposit_amount&&t?o.find(".deposit-amount").wc_gzd_set_content(e.deposit_amount):o.find(".deposit-amount").wc_gzd_reset_content(),""!==e.deposit_packaging_type&&t?o.find(".deposit-packaging-type").wc_gzd_set_content(e.deposit_packaging_type):o.find(".deposit-packaging-type").wc_gzd_reset_content(),""!==e.food_description?o.find(".wc-gzd-food-description").wc_gzd_set_content(e.food_description):o.find(".wc-gzd-food-description").wc_gzd_reset_content(),""!==e.nutri_score?o.find(".wc-gzd-nutri-score").wc_gzd_set_content(e.nutri_score):o.find(".wc-gzd-nutri-score").wc_gzd_reset_content(),""!==e.food_distributor?o.find(".wc-gzd-food-distributor").wc_gzd_set_content(e.food_distributor):o.find(".wc-gzd-food-distributor").wc_gzd_reset_content(),""!==e.food_place_of_origin?o.find(".wc-gzd-food-place-of-origin").wc_gzd_set_content(e.food_place_of_origin):o.find(".wc-gzd-food-place-of-origin").wc_gzd_reset_content(),""!==e.net_filling_quantity?o.find(".wc-gzd-net-filling-quantity").wc_gzd_set_content(e.net_filling_quantity):o.find(".wc-gzd-net-filling-quantity").wc_gzd_reset_content(),""!==e.drained_weight?o.find(".wc-gzd-drained-weight").wc_gzd_set_content(e.drained_weight):o.find(".wc-gzd-drained-weight").wc_gzd_reset_content(),""!==e.alcohol_content||"no"===e.includes_alcohol?o.find(".wc-gzd-alcohol-content").wc_gzd_set_content(e.alcohol_content):o.find(".wc-gzd-alcohol-content").wc_gzd_reset_content(),""!==e.nutrients?(o.find(".wc-gzd-nutrients").wc_gzd_set_content(e.nutrients),o.find(".wc-gzd-nutrients-heading").wc_gzd_set_content(e.nutrients_heading)):(o.find(".wc-gzd-nutrients").wc_gzd_reset_content(),o.find(".wc-gzd-nutrients-heading").wc_gzd_reset_content()),""!==e.ingredients?(o.find(".wc-gzd-ingredients").wc_gzd_set_content(e.ingredients),o.find(".wc-gzd-ingredients-heading").wc_gzd_set_content(e.ingredients_heading)):(o.find(".wc-gzd-ingredients").wc_gzd_reset_content(),o.find(".wc-gzd-ingredients-heading").wc_gzd_reset_content()),""!==e.allergenic?(o.find(".wc-gzd-allergenic").wc_gzd_set_content(e.allergenic),o.find(".wc-gzd-allergenic-heading").wc_gzd_set_content(e.allergenic_heading)):(o.find(".wc-gzd-allergenic").wc_gzd_reset_content(),o.find(".wc-gzd-allergenic-heading").wc_gzd_reset_content()),""!==e.shipping_costs_info&&t?o.find(".shipping-costs-info").wc_gzd_set_content(e.shipping_costs_info):o.find(".shipping-costs-info").wc_gzd_reset_content(),""!==e.unit_price&&t?o.find(".price-unit").wc_gzd_set_content(e.unit_price):o.find(".price-unit").wc_gzd_reset_content(),""!==e.product_units?o.find(".product-units").wc_gzd_set_content(e.product_units):o.find(".product-units").wc_gzd_reset_content(),n.$form.trigger("germanized_variation_data",e,o)},i.fn.wc_germanized_variation_form=function(){return new e(this),this},i.fn.wc_gzd_set_content=function(t){var e=this.not(".wc-gzd-additional-info-loop");n===e.attr("data-o_content")&&e.attr("data-o_content",e.html()),e.html(t),e.addClass("variation_modified variation_gzd_modified").removeClass("wc-gzd-additional-info-placeholder").show(),e.is(":empty")?(e.hide(),0<e.parents(".woocommerce-product-attributes-item").length&&e.parents(".woocommerce-product-attributes-item").hide()):0<e.parents(".woocommerce-product-attributes-item").length&&e.parents(".woocommerce-product-attributes-item").show()},i.fn.wc_gzd_reset_content=function(){var t=this.not(".wc-gzd-additional-info-loop");n!==t.attr("data-o_content")&&(t.html(t.attr("data-o_content")),t.removeClass("variation_modified variation_gzd_modified").show()),t.is(":empty")?(t.addClass("wc-gzd-additional-info-placeholder").hide(),0<t.parents(".woocommerce-product-attributes-item").length&&t.parents(".woocommerce-product-attributes-item").hide()):0<t.parents(".woocommerce-product-attributes-item").length&&t.parents(".woocommerce-product-attributes-item").show()},i(function(){"undefined"!=typeof wc_gzd_add_to_cart_variation_params&&(i(".variations_form").each(function(){i(this).wc_germanized_variation_form()}),i(t.body).on("wc_variation_form",function(t,e){e=i(e.$form);e.hasClass("has-gzd-variation-form")||(e.wc_germanized_variation_form(),e.trigger("check_variations"))}))})}(jQuery,(window,document));