# API CON NODEJS Y MONGODB

Creacion de una API con Nodejs y MONGODB con sus respectivas librerias de express y mongoose


## API Reference

#### Get - lista de usuarios

```http
  GET /localhost:3000
```

#### Get - un usuario

```http
  GET /localhost:3000/${id}
```

#### Post - agregar un usuario

```http
  Post /localhost:3000/
```
| Parametros | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | nombre |
| `lastName` | `string` | Segundo nombre |

#### Patch - Actualizar un usuario

```http
  Patch /localhost:3000/${id}
```
| Parametros | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | nombre |
| `lastName` | `string` | Segundo nombre |

#### Delete - Eliminar un usuario

```http
  Delete /localhost:3000/${id}
```
