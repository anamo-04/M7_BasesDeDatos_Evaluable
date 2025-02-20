const mongoose  =   require('mongoose');

const DeviceSchema  =   new mongoose.Schema(
    {   name        :   {
            type    :   String,
            required:   true,
        },
        art_number  :   {
            type    :   String,
            required:   [true, 'article number is required'],
            trim    :   true,
            validate:   {
                validator: function(v) {
                    return /^[A-Z0-9]{12}$/.test(v);
                },
                message: props => `${props.value} is not a valid article number!`
            }
        },
        serial_number  :   {
            type    :   String,
            required:   [true, 'serial number is required'],
            unique  :   true,
            trim    :   true,
            validate:   {
                validator: function(v) {
                    return /^[A-Z0-9]{14}$/.test(v);
                },
                message: props => `${props.value} is not a valid serial number!`
            }
        },
        description  :   {
            type    :   String,
            required:   true,
            validate:   {
                validator:  function(v) {
                    return /^.{0,40}$/.test(v);
                },
                message: props => `${props.value} Max. 40 caracteres`
            }
        },
        price  :   {
            type    :   Number,
            required:   [true, 'Why no price?'],
            min     :   0.00,
            max     :   99999.99,
            validate:   {
                validator: function(v) {
                    return /^\d+(\.\d{1,2})?$/.test(v);
                },
                message: props  => `${props.value} is not a valid price`
            }
        },
    }
)

module.exports  =   mongoose.model('Device', DeviceSchema);