<template>
    <div class="p-5 mb-4 ">
        <div class="shadow p-5 mb-5 bg-white rounded">
        <form>
          <div class="row ">
            <h5>Edit Kontak</h5>
                 <kontak-form></kontak-form>
            <div class="card-footer">
                <button @click.prevent="submit" id="button_id" class="btn btn-sm btn-primary"> Submit </button>
            </div>
          </div>
        </form>
        </div>
     </div>

</template>
<script>
import { mapActions } from 'vuex'
import FormKontak from './Form.vue'
export default {
    name: 'Uabhkontak',
    created() {
            this.editKontak(this.$route.params.id)
        },
    methods: {
        ...mapActions('kontak', ['editKontak','updateKontak']),

        submit() {
            this.updateKontak(this.$route.params.id).then(() => {
            this.$swal({
                title: 'Data berhasil diubah',
                type: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ok'
                }).then(() => {
                    this.$router.push({ name: 'kontak' })
                })
            })
        }
    },
    components: {
        'kontak-form': FormKontak
    }
}
</script>
