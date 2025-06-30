<template>
	<div class="about container">
		<h2 class="mt-5 mb-5 text-center">Consulta de Usuarios</h2>
		<form class="row g-3">
			<div class="col-auto">
				<input type="text" 
				readonly 
				class="form-control-plaintext" 
				id="staticLabel" 
				value="Ingrese Alumno: ">
			<!-- <v-skeleton-loader type=""></v-skeleton-loader> -->
			</div>
			<div class="col-auto">
				<input type="text" 
				class="form-control" 
				v-model="textUsername"
				id="userInput">
			</div>
			<div class="col-auto">
				<button type="button" 
				@click="searchUser"
				class="btn btn-primary mb-3">
				Buscar Usuarios</button>
			</div>
			<div class="col-auto"> 
				<button type="button" 
				@click="abrirModal()"
				class="btn btn-success mb-3">
				Crear Usuarios</button>
			</div>
			<div class="col-auto"> 
				<button type="button" 
				@click="PDF()"
				class="btn btn-danger mb-3">
				Descargar PDF</button>
			</div>
		</form>

		<form class="row g-3">
			<div class="col-auto">
				<input type="text" 
				readonly 
				class="form-control-plaintext" 
				id="staticLabelArchivo" 
				value="Leer archivo: ">
			</div>
			<div class="col-auto">
				<input type="file"
				id="archivoExcel" 
				class="form-control"
				@change="subirExcel()" 
				>
			</div>
		</form>
		<!-- <v-sheet color="grey" class="px-3 pt-3 pb-3" v-if="listardatos"> -->
			<!-- <v-skeleton-loader class="mx-auto" type="table" v-if="!listardatos"></v-skeleton-loader> -->
		<!-- </v-sheet> -->
		<table id="elemento-to-pdf" style="margin-top: 24px;" class="table"
		:items="listaralumnos" :fields="fields_alumnos">
			<thead class="table-dark">
				<tr>
				<th scope="col">#ID</th>
				<th scope="col">Matricula</th>
				<th scope="col">Nombre</th>
				<th scope="col">Correo</th>
				</tr>	
			</thead>
			<tbody v-if="!listaralumnos">
				<tr v-for="(row, rowIndex) in rows" :key="rowIndex">
				<td v-for="(cell, cellIndex) in row" :key="cellIndex">
				<!-- <Skeleton /> -->
				</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr v-for="ld in listaralumnos" v-bind:key="ld.id">
				<th scope="row">{{ ld.id }}</th>
				<td>{{ ld.matricula }}</td>
				<td>{{ ld.nombre }}</td>
				<td>{{ ld.email }}</td>
				</tr>
			</tbody>
			</table> 

			<!-- <table
			style="margin-top: 24px;" class="table"
			id="table2"
			:items="listaExcel" :fields="fields2">
			<thead class="table-dark">
				<tr>
				<th scope="col">#ID</th>
				<th scope="col">Nombre</th>
				<th scope="col">Nombre de Usuario</th>
				<th scope="col">Correo</th>
				</tr>	
			</thead>
			<tbody>
				<tr v-for="ld in listaExcel" :key="ld.id">
				<th scope="row">{{ ld.id }}</th>
				<td>{{ ld.name }}</td>
				<td>{{ ld.username }}</td>
				<td>{{ ld.email }}</td>
				</tr>
			</tbody>
			</table> -->

			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Registrar Alumno</h1>
					<button type="button" class="btn-close" @click="cerrarModal()" aria-label="Close"></button>
				</div>
				<div class="modal-body">
						<form @submit.prevent="registrarAlumno">
						<label>Matrícula:</label>
						<input v-model="alumno.matricula" type="text" required />

						<label>Nombre:</label>
						<input v-model="alumno.nombre" type="text" required />

						<label>Fecha de Nacimiento:</label>
						<input v-model="alumno.fecha_nacimiento" type="date" required />

						<label>Teléfono:</label>
						<input v-model="alumno.telefono" type="text" required />

						<label>Email:</label>
						<input v-model="alumno.email" type="email" required />

						<label>Nivel ID:</label>
						<input v-model.number="alumno.nivel_id" type="number" required />

						</form>
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-success" @click="registrarAlumno()">Guardar</button>
					<button type="button" class="btn btn-danger" @click="cerrarModal()">Cancelar</button>
					</div>
				</div>
			</div>
			</div>
	</div>
</template>

<script >
	import { ref } from "vue";
	import { userapi } from '@/api/userapi'
	import html2pdf from 'html2pdf.js'
  	import axios from 'axios'
	import readXlsFile from 'read-excel-file'
	//import { alumnos } from '@/api/alumnos'
	const baseUrl = import.meta.env.VITE_ENDPOINT_BACKEND
	const alumnos = baseUrl
	let modalInstance = null;

	export default {
		name: 'App',
		data: () => ({
			fields: ['id', 'name', 'username', 'email'],
			fields_alumnos: ['id', 'matricula', 'nombre', 'email', 'fecha_nacimiento', 'nivel_id', 'telefono'],
			mostrarModal: false,
			rows: new Array(8).fill(new Array(4).fill(null)),
			id: "",
			name: "",
			username: "",
			email: "",
			listardatos: [],
			listaralumnos: [],
			textUsername: '',
			listaExcel: [],
			fields2: [0, '', '', ''],
			cabecera:[
				{text:"id", value:'0'},
				{text:"name", value:'1'},
				{text:"username", value:'2'},
				{text:"email", value:'3'}
			],
			alumno: {
				matricula: '',
				nombre: '',
				fecha_nacimiento: '',
				telefono: '',
				email: '',
				nivel_id: 1
			}
		
		}),

	// 	data() {
    //   return {
    //     fields: ['id', 'name', 'username', 'email'],
    //     id: "",
    //     name: "",
    //     username: "",
    //     email: "",
    //     listardatos: [],
	// 	items: [],
	// 	cabecera:[
	// 			{text:"ID", value:'0'},
	// 			{text:"Nombre", value:'1'},
	// 			{text:"UserName", value:'2'},
	// 			{text:"Correo", value:'3'}
	// 		],
	// 	textUsername: ''
    //   }
    // },

	mounted(){
		`${this.textUsername}`.valueOf("");
		setTimeout(() => {
			this.searchUser();
		}, 5000);
		
	},

	methods: {
		subirExcel(){
			const input = document.getElementById("archivoExcel");
			const listaExcel = [
			["id", "name", "userName", "email"], // Cabecera del Excel
			];
			const headers = listaExcel[0]; 
			readXlsFile(input.files[0]).then((rows) => {
				const listaConCampos = rows;
				this.listardatos = listaConCampos.slice(0).map(row =>
						Object.fromEntries(row.map((value, index) => [headers[index].toLowerCase(), value]))
				);

				console.log("Excel list:", this.items)
				input.value = "";
			});

		},
		async searchUser () {

		let textUsername = `${this.textUsername}`;
		console.log("user: ", textUsername)
		
		// try {
		// 	const userToFind = await fetch(`${userapi}`)
		// 	const user = await userToFind.json()
		// 	this.userData = user
		// 	console.log(user)
		// 	return user
		// } catch (error) {
		// 	alert('Usuario no encontrado')
		// }

		// axios.get(`${alumnos}`)
		// .then(response => console.log(response.data)
		// )
		// .catch(error => console.error("CORS error:", error));
		
		axios.get(`${alumnos}`)
		.then(response => {
			console.log("Respuesta: ", response.data);
			this.listaralumnos = textUsername == '' ? response.data : response.data.filter(item => item.nombre == textUsername);
			if(this.listaralumnos.length == 0){
				alert('Alumno no encontrado');
			}
			// console.log("Lista: ", this.listardatos);

		})
		.catch(function (error){
			alert('Alumno no encontrado')
			console.log("Error:", error);

		})
		.finally(function(){

			// Se ejecuto sin problemas

		});
		},

		// Descargar(){
		// 	const data = this.items;
		// 	const fileName = 'download';
		// 	const exportType = exportFromJSON.types.json;
		// 	exportFromJSON({data, fileName, exportType});
		// }

		PDF(){
			var element = document.getElementById('elemento-to-pdf');
			var opt= {
				margin: 1,
				filename:'table.pdf',
				image: { type: 'jpeg', quality:0.98},
				html2canvas: { scale:2},
				jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
			};
			html2pdf().from(element).set(opt).save();
		},
		async registrarAlumno() {
		
			try {
				const response = await axios.post(`${alumnos}`, this.alumno);
				alert('Alumno registrado con éxito');
				console.log(response.data);
			

				this.alumno = {
				matricula: '',
				nombre: '',
				fecha_nacimiento: '',
				telefono: '',
				email: '',
				nivel_id: 1
				};

				this.cerrarModal();

				this.searchUser();

			} catch (error) {
				console.error(error);
				alert('Error al registrar alumno');
			}
		},
		abrirModal() {
			const modalEl = document.getElementById('exampleModal')

			if (!modalInstance) {
			modalInstance = new bootstrap.Modal(modalEl, {
				backdrop: true,
				keyboard: true
			});
			}

			modalInstance.show();
		},
		cerrarModal(){
			const modalEl = document.getElementById('exampleModal')
			modalInstance = bootstrap.Modal.getInstance(modalEl)
			modalInstance.hide()
			this.limpiarDrop();
		},
		limpiarDrop(){
			document.querySelectorAll('.modal-backdrop').forEach((el, index) => {
				if (index > 0) el.remove(); // elimina backdrops extras
			});
		}
	}
	}
</script>

<style scoped>
	.about {
		min-height: 60vh;
		max-width: 895px;
		margin: auto;
	}
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

/* .modal {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
} */

.modal input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}
</style>
