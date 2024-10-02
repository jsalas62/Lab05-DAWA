import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Inicialización
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));

// Configurar motor de plantillas
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));

// Rutas
app.get('/solicitud', (req, res) => {
    res.render('solicitud', { title: 'Formulario de Solicitud' });
});

app.get('/alquiler', (req, res) => {
    res.render('alquiler', { title: 'Formulario de Alquiler' });
});

// Servidor en ejecución
app.listen(app.get('port'), () => {
    console.log('Cargando el puerto', app.get('port'));
});
