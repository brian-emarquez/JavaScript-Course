### DOM (DOCUMENT OBJECT MODEL)

Es toda la estructura HTML del documento.
No es JavaScript, es una API (Aplication Programing Interface)

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> DOM </title>
</head>
<body>

    <hi id="title" class="title"> DOM Documents Object Model</h1>
    
    ellipse(215, 197, 277, 309)

</body>
</html>
```

### Representacion

```powershell

+---DOCUMENT
    +---LANG
    \---HTML
        +---HEAD
        |   +---META
                \---CHARSET
        |   +---TITLE
                \---DOM
        +--- BODY
        |   +---BODY
        |   +---H1
        |       +---ID
        |       +---CLASS
        |       \---TEXT

```

### Nodos

Cada parte del arbol del documento es un NODO

Hay varios tipos de nodos, los mas utilizados son:

    * Element node - 1 (cualuier etiqueta HTML)
    * Text node -3 (El Contenido de la etiqueta)
    * Comment node - 8 (Culquier comentario en HTML)
