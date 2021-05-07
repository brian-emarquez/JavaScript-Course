### Eventos Raton Teclado

- Un evento es cualquier cosa que sucede en nuestro documento
    * El contenido se ha leido
    * El contenido se ha cargado
    * El usuario mueve el raton
    * EL usuario Pulsa una tecla
    * La ventana se ha cerrado
    * y un largo etc.
    

```js
Elemento.addEventListener('event`, callback)
```

<table border="1" cellpadding="7" cellspacing="0">
		<tbody>
			<tr style="background-color: rgb(204, 204, 204);">
				<td>
					<p style="text-align: center;">
						<b>Tipo de evento</b></p>
				</td>
				<td>
					<p style="text-align: center;">
						<b>Nombre con prefijo on (eliminar cuando proceda)</b></p>
				</td>
				<td>
					<p style="text-align: center;">
						<b>Descripción aprenderaprogramar.com</b></p>
				</td>
			</tr>
			<tr>
				<td rowspan="10">
					<p>
						<b>Relacionados con el ratón</b></p>
				</td>
				<td>
					<p style="text-align: center;">
						onclick</p>
				</td>
				<td>
					<p>
						Click sobre un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						ondblclick</p>
				</td>
				<td>
					<p>
						Doble click sobre un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onmousedown</p>
				</td>
				<td>
					<p>
						Se pulsa un botón del ratón sobre un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onmouseenter</p>
				</td>
				<td>
					<p>
						El puntero del ratón entra en el área de un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onmouseleave</p>
				</td>
				<td>
					<p>
						El puntero del ratón sale del área de un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onmousemove</p>
				</td>
				<td>
					<p>
						El puntero del ratón se está moviendo sobre el área de un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onmouseover</p>
				</td>
				<td>
					<p>
						El puntero del ratón se sitúa encima del área de un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onmouseout</p>
				</td>
				<td>
					<p>
						El puntero del ratón sale fuera del área del elemento o fuera de uno de sus hijos</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onmouseup</p>
				</td>
				<td>
					<p>
						Un botón del ratón se libera estando sobre un elemento</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						contextmenu</p>
				</td>
				<td>
					<p>
						Se pulsa el botón derecho del ratón (antes de que aparezca el menú contextual)</p>
				</td>
			</tr>
			<tr>
				<td rowspan="3">
					<p>
						<b>Relacionados con el teclado</b></p>
				</td>
				<td>
					<p style="text-align: center;">
						onkeydown</p>
				</td>
				<td>
					<p>
						El usuario tiene pulsada una tecla (para elementos de formulario y body)</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onkeypress</p>
				</td>
				<td>
					<p>
						El usuario pulsa una tecla (momento justo en que la pulsa) (para elementos de formulario y body)</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onkeyup</p>
				</td>
				<td>
					<p>
						El usuario libera una tecla que tenía pulsada (para elementos de formulario y body)</p>
				</td>
			</tr>
			<tr>
				<td rowspan="6">
					<p>
						<b>Relacionados con formularios</b></p>
				</td>
				<td>
					<p style="text-align: center;">
						onfocus</p>
				</td>
				<td>
					<p>
						Un elemento del formulario toma el foco</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onblur</p>
				</td>
				<td>
					<p>
						Un elemento del formulario pierde el foco</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onchange</p>
				</td>
				<td>
					<p>
						Un elemento del formulario cambia</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onselect</p>
				</td>
				<td>
					<p>
						El usuario selecciona el texto de un elemento input o textarea</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onsubmit</p>
				</td>
				<td>
					<p>
						Se pulsa el botón de envío del formulario (antes del envío)</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onreset</p>
				</td>
				<td>
					<p>
						Se pulsa el botón reset del formulario</p>
				</td>
			</tr>
			<tr>
				<td rowspan="3">
					<p>
						<b>Relacionados con ventanas o frames</b></p>
				</td>
				<td>
					<p style="text-align: center;">
						onload</p>
				</td>
				<td>
					<p>
						Se ha completado la carga de la ventana</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onunload</p>
				</td>
				<td>
					<p>
						El usuario ha cerrado la ventana</p>
				</td>
			</tr>
			<tr>
				<td>
					<p style="text-align: center;">
						onresize</p>
				</td>
				<td>
					<p>
						El usuario ha cambiado el tamaño de la ventana</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Relacionados con animaciones y transiciones</b></p>
				</td>
				<td colspan="2">
					<p>
						animationend, animationiteration, animationstart, beginEvent, endEvent, repeatEvent, transitionend</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Relacionados con la batería y carga de la batería</b></p>
				</td>
				<td colspan="2">
					<p>
						chargingchange, chargingtimechange, dischargingtimechange, levelchange</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Relacionados con llamadas tipo telefonía</b></p>
				</td>
				<td colspan="2">
					<p>
						alerting, busy, callschanged, connected, connecting, dialing, disconnected, disconnecting, error, held, holding, incoming, resuming, statechange</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Relacionados con cambios en el DOM</b></p>
				</td>
				<td colspan="2">
					<p>
						DOMAttrModified, DOMCharacterDataModified, DOMContentLoaded, DOMElementNameChanged, DOMNodeInserted, DOMNodeInsertedIntoDocument, DOMNodeRemoved, DOMNodeRemovedFromDocument, DOMSubtreeModified</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Relacionados con arrastre de elementos (drag and drop)</b></p>
				</td>
				<td colspan="2">
					<p>
						drag, dragend, dragenter, dragleave, dragover, dragstart, drop</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Relacionados con video y audio</b></p>
				</td>
				<td colspan="2">
					<p>
						audioprocess, canplay, canplaythrough, durationchange, emptied, ended, ended, loadeddata, loadedmetadata, pause, play, playing, ratechange, seeked, seeking, stalled, suspend, timeupdate, volumechange, waiting, complete</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Relacionados con la conexión a internet</b></p>
				</td>
				<td colspan="2">
					<p>
						disabled, enabled, offline, online, statuschange, connectionInfoUpdate</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<b>Otros tipos de eventos</b></p>
				</td>
				<td colspan="2">
					<p>
						Hay más tipos de eventos: relacionados con la pulsación sobre pantallas, uso de copy and paste (copiar y pegar), impresión con impresoras, etc.</p>
				</td>
			</tr>
		</tbody>
	</table>