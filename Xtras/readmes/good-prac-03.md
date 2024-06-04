# BUENAS PRÁCTICAS

[Volver a Inicio](../README.md)

# PARÁMETROS INTELIGENTES

- La siguiente función recibe varios parámetros
  - ¿Pero qué sucede si no tenemos "origin" para enviarle como argumento?
  - ¿Y qué sucede si necesitamos agregar nuevos parámetros?

```js
function createCharacter(name, gender, image = "defaultURL", origin = "earth", status) {
  // Cuerpo de la función...
}

createCharacter("Rick", "Male", "url", undefined, "Live");
```

## Cómo podemos mejorarla

- De la siguiente forma, no nos preocuparemos por pasar los argumentos en orden o indicarlo como undefined si no lo tenemos
- También resulta mas escalable, ya que si agregamos nuevos parámetros, podemos darle un valor por default

```js
function createCharacter({ name, gender, image = "defaultURL", origin = "earth", status }) {
  // Cuerpo de la función...
}

createCharacter({
  name: "Rick", gender: "Male", image: "url", status: "Live",
});
```