<template :class="menuClass" class="d-flex flex-nowrap">
      <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <!-- Menu -->

        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
            <a href="/" class="app-brand-link">
              <span class="app-brand-logo demo">
                <svg
                  width="25"
                  viewBox="0 0 25 42"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                      id="path-1"
                    ></path>
                    <path
                      d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                      id="path-3"
                    ></path>
                    <path
                      d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                      id="path-4"
                    ></path>
                    <path
                      d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                      id="path-5"
                    ></path>
                  </defs>
                  <g id="g-app-brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                      <g id="Icon" transform="translate(27.000000, 15.000000)">
                        <g id="Mask" transform="translate(0.000000, 8.000000)">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>
                          <use fill="#696cff" xlink:href="#path-1"></use>
                          <g id="Path-3" mask="url(#mask-2)">
                            <use fill="#696cff" xlink:href="#path-3"></use>
                            <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-3"></use>
                          </g>
                          <g id="Path-4" mask="url(#mask-2)">
                            <use fill="#696cff" xlink:href="#path-4"></use>
                            <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-4"></use>
                          </g>
                        </g>
                        <g
                          id="Triangle"
                          transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                        >
                          <use fill="#696cff" xlink:href="#path-5"></use>
                          <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-5"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span class="app-brand-text demo menu-text fw-bolder ms-2">Quinua Corp°</span>
            </a>

            <a @click="toggleMenuBar" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
            <!-- Dashboard -->
            <li class="menu-item active">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>

            <!-- Layouts -->
            <li v-for="(item, index) in menuItems" :key="index" class="menu-item" :class="{'open': item.isOpen}" >
              <a href="#" @click="toggleMenu(index)" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts"> {{ item.title }}</div>
              </a>
            
              <ul v-if="item.isOpen" class="menu-sub">
                <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="menu-item">
                  <a href="#" class="menu-link">
                    <div data-i18n="Without menu">{{ subItem }}</div>
                  </a>
                </li>
              </ul>
            </li>
            <ul class="list-unstyled ps-0">
        <li class="border-top my-3"></li>
      </ul>

          </ul>
        </aside>
        <!-- / Menu -->

        <!-- Layout container -->
        <div class="layout-page">
          <!-- Navbar -->

          <nav
          class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div @click="toggleMenuBar" class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i class="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <!-- Search -->
              <div class="navbar-nav align-items-center">
                <div class="nav-item d-flex align-items-center">
                  <i class="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    class="form-control border-0 shadow-none"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>
              <!-- /Search -->

              <ul class="navbar-nav flex-row align-items-center ms-auto">
             
                <!-- User -->
                <li class="nav-item navbar-dropdown dropdown-user dropdown" :class="{ 'show': isDropdownOpen }">
                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" @click="toggleDropdown">
                  <div class="avatar avatar-online">
                    <img src="../assets/img/avatars/8.jpg" alt class="w-px-40 h-auto rounded-circle" />
                  </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" :class="{ 'show': isDropdownOpen }">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar avatar-online">
                            <img src="../assets/img/avatars/8.jpg" alt class="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <span class="fw-semibold d-block">Diego Bueno</span>
                          <small class="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li><div class="dropdown-divider"></div></li>
                  <li><a class="dropdown-item" href="#"><i class="bx bx-user me-2"></i> <span class="align-middle">Mi Perfil</span></a></li>
                  <li><a class="dropdown-item" href="/posts"><i class="bx bx-user me-2"></i> <span class="align-middle">Mis Publicaciones</span></a></li>
                  <li><a class="dropdown-item" href="#"><i class="bx bx-cog me-2"></i> <span class="align-middle">Configuración</span></a></li>
                  <li><div class="dropdown-divider"></div></li>
                  <li><a class="dropdown-item" href="/"><i class="bx bx-power-off me-2"></i> <span class="align-middle">Cerrar Sesión</span></a></li>
                </ul>
              </li>
                <!--/ User -->
              </ul>
            </div>
          </nav>

          <!-- / Navbar -->

          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
                <div class="col-lg-12 mb-4 order-0">
                  <div class="card">
                    <div class="d-flex align-items-end row">
                      <div class="col-sm-7">
                        <div class="card-body">
                          <h5 class="card-title text-primary">Felicitaciones Diego! 🎉</h5>
                          <p class="mb-4">
                            Has realizado un <span class="fw-bold">72%</span> más en el registro de la quinua procesada. Revisa los reportes
                            para mantenerte al día en el proceso.
                          </p>

                          <a href="/report" class="btn btn-sm btn-outline-primary">Ver Reporte</a>
                          <GeneratePDF />
                          <!-- <a @click="generatePDF" style="margin-left: 18px;" class="btn btn-sm btn-outline-primary">Generar PDF</a> -->
                        </div>
                      </div>
                      <div class="col-sm-5 text-sm-left" style="text-align: right !important;">
                        <div class="card-body pb-0 px-0 px-md-4">
                          <img
                            src="../assets/img/illustrations/man-with-laptop-light.png"
                            height="140"
                            alt="View Badge User"
                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                            data-app-light-img="illustrations/man-with-laptop-light.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Mantenimiento -->
                <div class="col-12 col-lg-12 order-2 order-md-3 order-lg-2 mb-4">
                  <div class="card">
                  <div class="card-datatable text-nowrap">
                    <div id="DataTables_Table_0_wrapper" class="dt-container dt-bootstrap5 dt-empty-footer">
                      <div class="row card-header flex-column flex-md-row pb-0">
                        <div class="d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto mt-0 mb-4">
                        <h2 class="card-title mb-0 text-md-start text-center">Mantenimiento de Productos</h2>
                      </div>
                      <div class="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto mt-0 mb-4">
                        <div class="dt-buttons btn-group flex-wrap mb-0">
                      <button class="btn create-new btn-primary"  data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal2" 
                                    data-bs-whatever="@mdo"
                                    tabindex="0" aria-controls="DataTables_Table_0" type="button">
                        <span><span class="d-flex align-items-center gap-2">
                          <i class="icon-base bx bx-plus icon-sm"></i> 
                          <span class="d-none d-sm-inline-block">Agregar Producto</span>
                        </span></span>
                      </button> 
                    </div>
                  </div>
                </div>
                <div class="row m-3 my-0 justify-content-between">
                  </div>
                  <div class="justify-content-between dt-layout-table"><div class="d-md-flex justify-content-between align-items-center col-12 dt-layout-full col-md">
                    <DataTable :apiData="apiData" @edit="fetchUpdate" @delete="deleteModal" />
                    <!-- <table class="datatables-basic table table-bordered table-responsive dataTable dtr-column" id="DataTables_Table_0" 
                    :items="apiData" :fields="fields" aria-describedby="DataTables_Table_0_info" style="width: 100%;">
                      <colgroup>
                        <col data-dt-column="1" style="max-width: 10% !important">
                        <col data-dt-column="2" style="max-width: 10% !important">
                        <col data-dt-column="3" style="width: 20px;">
                        <col data-dt-column="4" style="width: 14px;">
                      </colgroup>
                      <thead>
                        <tr>
                          <th data-dt-column="0" class="control dt-orderable-none dtr-hidden" rowspan="1" colspan="1" aria-label="" style="display: none;">
                            <span class="dt-column-title"></span>
                            <span class="dt-column-order"></span>
                          </th>
                            <th data-dt-column="1" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="Name: Activate to sort" tabindex="0">
                              <span class="dt-column-title" role="button">Titulo</span>
                              <span class="dt-column-order"></span>
                            </th>
                              <th data-dt-column="2" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="Status: Activate to sort" tabindex="0">
                                <span class="dt-column-title" role="button">Categoria</span>
                                <span class="dt-column-order"></span>
                              </th>
                              <th class="d-flex align-items-center dt-orderable-none" data-dt-column="3" rowspan="1" colspan="1" aria-label="Actions">
                                <span class="dt-column-title">Actions</span>
                                <span class="dt-column-order"></span>
                              </th>
                            </tr>
                      </thead>
                      <tbody>
                        <tr style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis" v-for="ld in apiData" v-bind:key="ld.id" class="">
                          <td class="control dtr-hidden" tabindex="0" style="display: none;">{{ ld.id }}</td>
                            <td>
                            <div class="d-flex justify-content-start align-items-center user-name">
                              <div class="avatar-wrapper">
                                <div class="avatar me-2">
                                  <img :src="ld.image" alt="Avatar" class="rounded-circle">
                                </div>
                              </div>
                              <div class="d-flex flex-column">
                                <span class="emp_name text-truncate text-heading">{{ ld.title }}</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span :class="getCategoryClass(ld.category)">
                              {{ ld.category }}
                            </span>
                          </td>
                          <td class="d-flex align-items-center">
                            <a href="javascript:;" class="btn btn-icon item-edit">
                                <i data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal" 
                                    data-bs-whatever="@mdo"
                                    @click="fetchUpdate(ld.id)" 
                                    class="icon-base bx bx-edit icon-sm text-primary"></i>
                              </a>
                              <a href="javascript:;" data-bs-toggle="modal" 
                                    data-bs-target="#animationModal" 
                                    data-bs-whatever="@mdo" @click="deleteModal(ld.id)"   class="btn btn-icon item-delete">
                                <i class="icon-base bx bx-minus-circle icon-sm text-danger"></i>
                              </a>
                            </td>
                        </tr>
                      </tbody>
                    <tfoot></tfoot>
                  </table> -->
                </div>
              </div>
               
              </div>
                  </div>
                </div>
                </div>
                <!--/ Fin Mant -->
              </div>
              <div class="row">
              </div>
            </div>
            <!-- / Content -->

            <!-- Footer -->
            <footer class="content-footer footer bg-footer-theme">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                
              </div>
            </footer>
            <!-- / Footer -->
            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Productos</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form v-if="apiUpdate">
					<div class="mb-3">
						<label for="title-text" class="col-form-label">Titulo: </label>
						<input type="text" class="form-control" id="title-text" v-model="apiUpdate.title" >
					</div>
					<div class="mb-3">
						<label for="category-text" class="col-form-label">Descripción: </label>
						<textarea class="form-control" id="category-text" v-model="apiUpdate.description"></textarea>
					</div>
					</form>
				</div>
				<div class="modal-footer">
					<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
					<button type="button" @click="registerProduct" class="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
				</div>
        <pre>{{ jsonFormat }}</pre>
				</div>
			</div>
			</div>

      <div class="modal fade" ref="modalRef" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Productos</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form>
					<div class="mb-3">
						<label for="recipient-name" class="col-form-label">Titulo: </label>
						<input type="text" class="form-control" id="title-text" v-model="newProduct.title" >
					</div>
					<div class="mb-3">
						<label for="message-text" class="col-form-label">Descripción: </label>
						<textarea class="form-control" id="category-text" v-model="newProduct.description"></textarea>
					</div>
					</form>
				</div>
				<div class="modal-footer">
					<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
					<button type="button" @click="registerProduct" class="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
				</div>
				</div>
			</div>
			</div>

      <div class="modal animate__animated animate__fadeInDown" id="animationModal" tabindex="-1" style="display: none;" aria-modal="true" role="dialog">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel5">Advertencia</h2>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col mb-6">
                        <h5 class="modal-title" id="exampleModalLabel5">¿Está seguro que desea eliminar el producto?</h5>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">No</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  @click="fetchDelete()">Si</button>
                  </div>
                </div>
            </div>
      </div>

    </div>
  </template>
  <script setup>
      import { ref, onMounted, computed, toRaw  } from "vue";
      import "@/assets/sidebars.css";
      import "@/assets/sidebars.js";
      import "@/assets/vendor/libs/datatables-buttons-bs5/buttons-bootstrap5.css";
      import "@/assets/vendor/js/menu.js";
      import "@/assets/vendor/js/bootstrap.js";
      import "@/assets/vendor/css/core.css";
      import "@/assets/vendor/css/theme-default.css";
      import "@/assets/vendor/libs/apex-charts/apexcharts.js";
      import DataTable from "@/components/DataTable.vue";
      import GeneratePDF from "@/components/GeneratePDF.vue";
      import axios from 'axios';


        const newProduct = ref({
          title: "",
          price: 13.5,
          description: "",
          category: "electronics",
          image: "https://i.pravatar.cc",
        });
          
        const modalRef = ref(null);

        const menuItems = ref([
          { title: "Productor de Campo", isOpen: false, subItems: ["Plan de actividades", "Registro de cosecha", "Registro de ventas"] },
          { title: "Almacén Central", isOpen: false, subItems: ["Registro de recepción", "Etiquetado de sacos", "Guía de salida de producto a proceso", "Guía de ingreso a planta procesadora"] },
          { title: "Procesamiento", isOpen: false, subItems: ["Registros de procesamiento (HACCP, BPM, y PHS)", "Orden de proceso", "Liquidación de orden de proceso (resultados de proceso)", "Marcado de sacos"] },
        ]);

        const toggleMenu = (index) => {
          menuItems.value[index].isOpen = !menuItems.value[index].isOpen;
        };

        const isDropdownOpen = ref(false);
        const toggleDropdown = () => {
          isDropdownOpen.value = !isDropdownOpen.value;
        };

        const isMenuExpanded = ref(false);
        const toggleMenuBar = () => {
          isMenuExpanded.value = !isMenuExpanded.value;
          document.documentElement.classList.toggle('layout-menu-expanded', isMenuExpanded.value);
        };

        const apiData = ref([]); 
        const fetchData = async () => {
          try {
            const response = await axios.get("https://fakestoreapi.com/products");
            apiData.value = response.data; 
            console.log("Datos cargados:", apiData.value);
          } catch (error) {
            console.error("Error al obtener los datos:", error);
          }
        };

        const apiUpdate = ref(null);
        const fetchUpdate = async (id) => {

          if (id === 0) {
            apiUpdate.value = { title: "", description: "", category: "" };
            console.log("Campos vaciados porque ID es 0");
            return;
          }

          try {
            console.log("Dato cargados Edit:", id);
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            apiUpdate.value =  response.data || { title: "", price: "", description: "", category: "" };
            console.log("Datos cargados Edit:", apiUpdate.value);
          } catch (error) {
            console.error("Error al obtener los datos:", error);
          }
        };
        const jsonFormat = computed(() => JSON.stringify(toRaw(apiUpdate.value), null, 2));

        
        const fetchDelete = async () => {

          
            try {
              console.log("Dato cargados Delete:", modalDeleteRef.value);
              //const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
              //apiUpdate.value =  response.data || { title: "", price: "", description: "", category: "" };
              apiData.value = apiData.value.filter(product => product.id !== modalDeleteRef.value);
              console.log("Datos cargados Delete:", apiUpdate.value);
            } catch (error) {
              console.error("Error al obtener los datos:", error);
            }
        };

        const registerProduct = async () => {
            try {
              console.log("Registrando producto...", newProduct.value );
              
              const response = await axios.post("https://fakestoreapi.com/products", newProduct.value);
              console.log("Registrando producto...", newProduct.value );
          
              if(apiUpdate.value != null){
                      console.log("Producto actualizado con éxito:", response.data);
                      alert("Producto actualizado correctamente!");
              }else{
                console.log("Producto registrado con éxito:", response.data);
                alert("Producto registrado correctamente!");
              }
             
             
              newProduct.value = { title: ""};
          
              closeModal();
            } catch (error) {
              console.error("Error al registrar el producto:", error);
              alert("Hubo un error al registrar el producto.");
            }
          };

          const closeModal = () => {
            if (modalRef.value) {
              modalRef.value.classList.remove("show");
              modalRef.value.style.display = "none";
              document.body.classList.remove("modal-open");
            }
          };

          const modalDeleteRef = ref(0);
          const deleteModal = (id) => {
            modalDeleteRef.value = id;
          };

        onMounted(fetchData);

  </script>
  
  <style scoped>
    .btn-toggle {
      background: none;
      color: inherit;
      font-weight: 600;
    }

    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .nav-link.active {
        background-color: #007bff;
        color: white;
      }
      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
      }

      .dropdown.show .dropdown-menu {
        display: block;
      }
      .submenu {
        list-style: none;
        padding-left: 20px;
      }

      .nav-item.open > .submenu {
        display: block;
      }

      .dropdownEdit-menu {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
      }

      .dropdownEdit-menu {
        display: block;
      }
  </style>
  