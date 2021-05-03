# Crear certificado SSL en windows

El certificado para produción debe ser comprado pero para hacer pruebas podemos crear nuestro propio certificado. Para crear un certificado SSL, primero tenemos que descargar el [terminal OpenSSL](https://slproweb.com/products/Win32OpenSSL.html). Una vez instalado, escribimos en el terminal `openssl req -nodes -new -x509 -keyout server.key -out server.cert`, una vez lanzada saldrá unas preguntas en las que tenemos que asegurarnos de introducir valores válidos. El `Common Name` debe ser `localhost` en caso contrario no funcionará, ya que debe configurarse en el dominion en el que se ejecuta la aplicación.