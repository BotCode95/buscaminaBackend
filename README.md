# Challenge Buscamina Backend
## _Documentación_


Building in Heroku, 
Desarrollado con NodeJs and MongoDB
Pasos a seguir para correr la aplicación.

## Instalación

Se requiere [Node.js](https://nodejs.org/) v10+ to run.
Se requiere [MongoDBCompass](https://www.mongodb.com/try/download/compass/)

Instalación de dependencias y servidor en local.
```sh
npm install
En Local: 
npm run dev --nodemon
npm run start --dev
```

- en el archivo .env se encuentra el puerto y la conexión al cluster de MongoDB para realizar pruebas locales
- Instalando MongoDBCompass se coloca la url que se encuentra en .env MONGODB_CNN y se puede observar la DB appgamebuscamina.
- Dentro del repo se encuentra la colección de postman con todos los metodos listo para probar en localhost
- Para correr los test puede que sea necesario tener instalado Mongo en local.

## Testing
Ejecutar para realizar los test
```sh
npm run test
```

-------------------------------------
