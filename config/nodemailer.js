const nodemailer = require('nodemailer');
const nodemailerHandlebars = require('nodemailer-express-handlebars');
const path = require('path');

// Create a Nodemailer transporter
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: '465',
    secure: 'true',
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_APP_PASSWORD
    }
});
const handlebarsOptions = {
    viewEngine: {
        extname: '.handlebars',
        layoutsDir: path.join('templates/'),
        defaultLayout: '',
    },
    viewPath: path.join('templates/'),
    extName: '.html'
};
transporter.use('compile', nodemailerHandlebars(handlebarsOptions));

export const emailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL
};