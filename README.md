# Markdown Links
Es una librería que permite leer y analizar archivos en formato markdown para verificar los links que contenga el archivo y poder validar su estado. 

## 1. Diagrama de Flujo
Para poder implementar esta librería, se realizaron 2 diagramas de flujo para cada módulo.

### API
![Api](https://github.com/lorena-1204/LIM014-mdlinks/blob/main/readme-img/API.jpeg?raw=true)

### CLI (Command Line Interface - Interfaz de Línea de Comando)
![Cli](https://github.com/lorena-1204/LIM014-mdlinks/blob/main/readme-img/CLI.png?raw=true)

## 2. Instalación
Se puede instalar la libreríade la siguiente manera:
npm install md-links-lrc.

## 3. Modo de Uso 
* md-links path --validate
![validate](https://github.com/lorena-1204/LIM014-mdlinks/blob/main/readme-img/--validate.PNG?raw=true)

* md-links path --stats
![stats](https://github.com/lorena-1204/LIM014-mdlinks/blob/main/readme-img/--stats.PNG?raw=true)

* md-links path --validate --stats
![validate y stats](https://github.com/lorena-1204/LIM014-mdlinks/blob/main/readme-img/validateYstats.PNG?raw=true)

Si se ingresa una ruta errónea, entonces saldría en la consola el siguiente mensaje:

![fai](https://raw.githubusercontent.com/lorena-1204/LIM014-mdlinks/main/readme-img/fail.PNG)

