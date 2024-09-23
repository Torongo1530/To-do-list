
let numeroDeTarea = 0;

// Función para agregar una nueva tarea desde el formulario
function agregarFormulario(event){

  event.preventDefault();
  let form = document.getElementById("todoForm");
  let nombre = form.elements.nombre.value;
  let descripcion = form.elements.descripcion.value;
  let fecha = form.elements.fecha.value;
  let hora = form.elements.hora.value;
  accionAgregar(nombre, descripcion, fecha, hora);

    // Limpiar los campos del formulario
  form.elements.nombre.value = '';
  form.elements.descripcion.value = '';
  form.elements.fecha.value = '';
  form.elements.hora.value = '';

}
// Función para agregar una tarea a la tabla
function accionAgregar(nombre, descripcion, fecha, hora){
  let tbody = document.getElementById('table-body');
  var row = tbody.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  cell1.textContent = numeroDeTarea++;
  cell2.textContent = nombre;
  cell3.textContent = descripcion;
  cell4.textContent = fecha;
  cell5.textContent = hora;
  
  let estadoLabel = document.createElement("label");
  estadoLabel.className = "bg-warning text-light p-2 rounded";
  estadoLabel.textContent = "Pendiente";
  cell6.appendChild(estadoLabel);

  // Botones de acción
  let btnEliminar = document.createElement("button");
  btnEliminar.className = "bg-danger text-light p-2 rounded"
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = function() {
      eliminarTarea(row);
  };

    let btnCompletar = document.createElement("button");
    btnCompletar.className = "bg-success text-light p-2 rounded"
    btnCompletar.textContent = "Completar";
    btnCompletar.onclick = function() {
        completarTarea(estadoLabel);
    };

    cell7.appendChild(btnCompletar);
    cell7.appendChild(document.createTextNode(" "));
    cell7.appendChild(btnEliminar);
}

// Función para completar la tarea
function completarTarea(estadoLabel) {
  estadoLabel.textContent = "Completado";
  estadoLabel.className = "bg-success text-light p-2 rounded";
}
// Función para eliminar la tarea de la tabla
function eliminarTarea(row) {
  let tbody = document.getElementById('table-body');
  tbody.deleteRow(row.rowIndex - 1);
}
numeroDeTarea = 1;
  for (let i = 0; i < tbody.rows.length; i++) {
    tbody.rows[i].cells[0].textContent = numeroDeTarea++;
  }