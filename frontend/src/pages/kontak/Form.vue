<template>

            <div class="row mb-4">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" class="form-control" placeholder="nama" v-model="kontak.name">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="email" v-model="kontak.email">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Telphone</label>
                        <input type="number" class="form-control" placeholder="083xxxx" v-model="kontak.tlp">
                    </div>
                </div>
           </div>
                     

</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'FormKontak',
    computed: {
        ...mapState('kontak', {
            kontak: state => state.kontak
        })
    },
    methods: {
        ...mapMutations('kontak', ['CLEAR_FORM']),
    },
    destroyed() {
        this.CLEAR_FORM()
    }
}
</script>
