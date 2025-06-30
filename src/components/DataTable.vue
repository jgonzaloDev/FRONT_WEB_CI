<template>
    <table
      class="datatables-basic table table-bordered table-responsive dataTable dtr-column"
      id="DataTables_Table_0"
      aria-describedby="DataTables_Table_0_info"
      style="width: 100%"
    >
      <colgroup>
        <col data-dt-column="1" style="max-width: 10% !important" />
        <col data-dt-column="2" style="max-width: 10% !important" />
        <col data-dt-column="3" style="width: 20px" />
        <col data-dt-column="4" style="width: 14px" />
      </colgroup>
      <thead>
        <tr>
          <th
            data-dt-column="0"
            class="control dt-orderable-none dtr-hidden"
            rowspan="1"
            colspan="1"
            aria-label=""
            style="display: none"
          >
            <span class="dt-column-title"></span>
            <span class="dt-column-order"></span>
          </th>
          <th data-dt-column="1" style="width: 20px;" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc">
            <span class="dt-column-title" role="button">Titulo</span>
          </th>
          <th data-dt-column="2" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc">
            <span class="dt-column-title" role="button">Categoria</span>
          </th>
          <th class="d-flex align-items-center dt-orderable-none" data-dt-column="3" rowspan="1" colspan="1">
            <span class="dt-column-title">Acciones</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis"
          v-for="ld in apiData"
          :key="ld.id"
        >
          <td class="control dtr-hidden" tabindex="0" style="display: none">{{ ld.id }}</td>
          <td>
            <div class="d-flex justify-content-start align-items-center user-name">
              <div class="avatar-wrapper">
                <div class="avatar me-2">
                  <img :src="ld.image" alt="Avatar" class="rounded-circle" />
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
              <i
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                @click="$emit('edit', ld.id)"
                class="icon-base bx bx-edit icon-sm text-primary"
              ></i>
            </a>
            <a
              href="javascript:;"
              data-bs-toggle="modal"
              data-bs-target="#animationModal"
              data-bs-whatever="@mdo"
              @click="$emit('delete', ld.id)"
              class="btn btn-icon item-delete"
            >
              <i class="icon-base bx bx-minus-circle icon-sm text-danger"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>

    import "@/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.css";
    import "@/assets/vendor/libs/datatables-buttons-bs5/buttons-bootstrap5.css";
    import "@/assets/vendor/js/menu.js";
    import "@/assets/vendor/js/bootstrap.js";
  
    

  export default {
    props: {
      apiData: {
        type: Array,
        required: true,
      },
    },
    methods: {
      getCategoryClass(category){
          return {
            "badge": true,
            "bg-label-warning": category === "men's clothing",
            "bg-label-success": category === "electronics", 
            "bg-label-primary": category === "jewelery",
            "bg-label-danger": category === "women's clothing",
          };
        }
    },
  };
  </script>
  