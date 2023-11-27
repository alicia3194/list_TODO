# TODO List App with React

Este proyecto es una aplicación de lista de tareas simple desarrollada en React, haciendo uso del estado local (`useState`) para gestionar la lista de tareas. La aplicación incluye los siguientes componentes y características:

## Componentes y Características

1. **Formulario de Tareas:**
   - Input para agregar nuevas tareas.
   - Botón "ADD" para agregar tareas a la lista.

2. **Lista de Tareas (`List`):**
   - Recorre la lista de tareas y renderiza cada tarea como un componente `Item`.
   
3. **Item o Card (`Item`):**
   - Contiene cada tarea individual en la lista.

4. **Botones de Acción:**
   - Botón "CLEAR" para borrar todas las tareas.
   - Botón "BORRAR" asociado a cada tarea para borrar de manera independiente.

5. **Botón de RESET:**
   - Restaura la lista de tareas a su estado original utilizando una precarga de datos desde un JSON.

6. **Estilo CSS:**
   - Los componentes están estilizados utilizando CSS, aplicando conceptos vistos en clase para practicar.

## Flujo de la Aplicación

1. Al inicio, se muestra un input y un botón con el texto "ADD".
2. Si se escribe algo en el input y se hace clic en "ADD", se añade un item debajo del input.
3. Cuando se añade un item, el texto ingresado en el input se borra inmediatamente.
4. La aplicación realiza una precarga de tareas desde un JSON de datos.
5. Al hacer clic en el botón de RESET, se muestra nuevamente solo las tareas obtenidas de la precarga de datos.

