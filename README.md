openapi: 3.0.1
info:
  title: API Entrenadores GYM-STYLE'S
  description: >-
    Api para me manejo de la base de datos de entrenadores en la cual puedes
    hacer peticiones de crear,traer todos los entenadores, traer entrenadores
    por ID, Actulizar entrenadores por ID, eliminar entrenadores por ID,
    Eliminar todos lo entrenadores
  version: 1.0.0
servers:
  - url: //localhost:8080/api/tutorials
tags:
  - name: PETICIONES
    description: Todas las peticiones que puedes hacer 😎
paths:
  /:
    get:
      tags:
        - PETICIONES
      summary: Trae todos los entrenadores
      requestBody:
        description: Entrenadores que trae
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Entrenador'
        required: true
      responses:
        '500':
          description: Ocurrió algún error al crear el Entrenador
          content: {}
      x-codegen-request-body-name: body
    post:
      tags:
        - PETICIONES
      summary: Añade un nuevo entrenador
      requestBody:
        description: Entrenador que se va a agregar
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Entrenador'
        required: true
      responses:
        '500':
          description: Ocurrió algún error al crear el Entrenador
          content: {}
      x-codegen-request-body-name: body
    delete:
      tags:
        - PETICIONES
      summary: Deletes a pet
      operationId: deletePet
      requestBody:
        description: Entrenadores que se borran
        content:
          '*/*':
            schema:
              $ref: '#/components/schemas/Entrenador'
        required: true
      responses:
        '500':
          description: Ocurrió algún error al crear el Entrenador
          content: {}
      x-codegen-request-body-name: body
  /:id:
    get:
      tags:
        - PETICIONES
      summary: Trae a el entrenador segun su id
      parameters:
        - name: Id
          in: path
          description: Id del entrenador a traer
          required: true
          schema:
            type: string
      requestBody:
        description: Entrenador que trae
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Entrenador'
        required: true
      responses:
        '500':
          description: Ocurrió algún error al crear el Entrenador
          content: {}
      x-codegen-request-body-name: body
    put:
      tags:
        - PETICIONES
      summary: Actualiza a el entrenador segun su id
      parameters:
        - name: Id
          in: path
          description: Id del entrenador a actualizar
          required: true
          schema:
            type: string
      requestBody:
        description: Entrenador que se actualiza
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Entrenador'
        required: true
      responses:
        '500':
          description: Ocurrió algún error al crear el Entrenador
          content: {}
      x-codegen-request-body-name: body
    delete:
      tags:
        - PETICIONES
      summary: Borra a el entrenador segun su id
      parameters:
        - name: Id
          in: path
          description: Id del entrenador a borrar
          required: true
          schema:
            type: string
      requestBody:
        description: Entrenador que se elimina
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Entrenador'
        required: true
      responses:
        '500':
          description: Ocurrió algún error al crear el Entrenador
          content: {}
      x-codegen-request-body-name: body
components:
  schemas:
    Entrenador:
      type: object
      properties:
        id:
          type: integer
          format: int(20)
        Nombre:
          type: string
          format: varchar(20)
        Apellido:
          type: string
          format: varchar(20)
        Edad:
          type: integer
          format: int(20)
        horario:
          type: string
          format: varchar(20)
        Clase:
          type: string
          format: varchar(20)
      xml:
        name: Entrenador
 
