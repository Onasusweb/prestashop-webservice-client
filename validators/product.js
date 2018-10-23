(async () => {
    const requireJson = require('../util/requireJson');
    const validatorsMap = await requireJson('../validators_mapping/language.json');

    const validate = (validationArgs) => {
        validatorsMap[validationArgs.originPath].format(validationArgs.originValue, validatorsMap[validationArgs.originPath].maxSize);
    };

    module.exports["id_manufacturer"] = validate;
    module.exports["id_supplier"] = validate;
    module.exports["id_category_default"] = validate;
    module.exports["id_tax_rules_group"] = validate;
    module.exports["id_shop_default"] = validate;
    module.exports["reference"] = validate;
    module.exports["supplier_reference"] = validate;
    module.exports["location"] = validate;
    module.exports["width"] = validate;
    module.exports["height"] = validate;
    module.exports["depth"] = validate;
    module.exports["weight"] = validate;
    module.exports["quantity_discount"] = validate;
    module.exports["ean13"] = validate;
    module.exports["isbn"] = validate;
    module.exports["upc"] = validate;
    module.exports["cache_is_pack"] = validate;
    module.exports["cache_has_attachments"] = validate;
    module.exports["is_virtual"] = validate;
    module.exports["state"] = validate;
    module.exports["additional_delivery_times"] = validate;
    module.exports["delivery_in_stock"] = validate;
    module.exports["delivery_out_stock"] = validate;
    module.exports["on_sale"] = validate;
    module.exports["online_only"] = validate;
    module.exports["ecotax"] = validate;
    module.exports["minimal_quantity"] = validate;
    module.exports["low_stock_threshold"] = validate;
    module.exports["low_stock_alert"] = validate;
    module.exports["price"] = validate;
    module.exports["wholesale_price"] = validate;
    module.exports["unity"] = validate;
    module.exports["additional_shipping_cost"] = validate;
    module.exports["customizable"] = validate;
    module.exports["text_fields"] = validate;
    module.exports["uploadable_files"] = validate;
    module.exports["active"] = validate;
    module.exports["redirect_type"] = validate;
    module.exports["id_type_redirected"] = validate;
    module.exports["available_for_order"] = validate;
    module.exports["available_date"] = validate;
    module.exports["show_condition"] = validate;
    module.exports["condition"] = validate;
    module.exports["show_price"] = validate;
    module.exports["indexed"] = validate;
    module.exports["visibility"] = validate;
    module.exports["advanced_stock_management"] = validate;
    module.exports["date_add"] = validate;
    module.exports["date_upd"] = validate;
    module.exports["pack_stock_type"] = validate;
    module.exports["meta_description"] = validate;
    module.exports["meta_keywords"] = validate;
    module.exports["meta_title"] = validate;
    module.exports["link_rewrite"] = validate;
    module.exports["name"] = validate;
    module.exports["description"] = validate;
    module.exports["description_short"] = validate;
    module.exports["available_now"] = validate;
    module.exports["available_later"] = validate;


})();