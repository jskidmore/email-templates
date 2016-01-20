# email-templates
This is a collection of templates used for emails sent from OMG applications.

## Templates
Source for the email templates is in `source/*.hbs` and shared layouts are in `source/layouts/*.hbs`.

The templates use [Handlebars.js](http://handlebarsjs.com/) with [handlebars-layout](https://www.npmjs.com/package/handlebars-layouts)

## Building
    gulp
Builds templates from `build/*.hbs` to `build/*.html`

## Future Work
* Update templates through the [SendGrid's API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Transactional_Templates/templates.html)
