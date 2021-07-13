<template>
    <div class="p-5 mb-4 ">
        <div class="shadow p-5 mb-5 bg-white rounded">
            <div class="dataTables_wrapper dt-bootstrap4 no-footer">
                <div class="row">
                    <div class="col-md-10 mb-4">                                        
                        <router-link :to="{ name: 'create' }" class="btn btn-primary btn-sm btn-flat" style="margin-left:15px">Tambah</router-link>
                    </div>
                    <div class="col-sm-12">
                    <b-table striped hover bordered :items="kontaks.data" :fields="fields" show-empty class="thead-color table" >
                       <template v-slot:cell(actions)="row">
                            <router-link :to="{ name: 'edit', params: {id: row.item.id} }" class="btn btn-warning btn-sm"><i class="fa fa-pencil-alt icon-sm"></i>Edit</router-link>
                            <button class="btn btn-danger btn-sm" @click="deleteKontak(row.item.id)"><i class="fa fa-trash"></i> Hapus</button>
                        </template>
                    </b-table>
                  </div>
                  
                </div>  
            </div>           
        </div>
     </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'DataKontaks',

    created() {
        this.getKontaks()
    },
    data() {
        return {
            fields: [
                { key: 'name', label: 'Nama', tdClass: 'text-center', thClass: 'text-center' },
                { key: 'email', label: 'Email', tdClass: 'text-center', thClass: 'text-center' },
                { key: 'tlp', label: 'Telphone', tdClass: 'text-center', thClass: 'text-center' },
                { key: 'actions', label: 'aksi', tdClass: 'text-center', thClass: 'text-center'}

            ]
        }
    },
    computed: {
        ...mapState('kontak', {
            kontaks: state => state.kontaks
        })
    },
    methods: {
        ...mapActions('kontak', ['getKontaks','removeKontak']),
        deleteKontak(id) {
            this.$swal({
                title: 'Anda Yakin?',
                text: "Tindakan ini akan menghapus secara permanen!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Lanjutkan!'
            }).then((result) => {
                if (result.value) {
                    this.removeKontak(id)
                }
            })
        }
    }
}
</script>

