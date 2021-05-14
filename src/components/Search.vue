<template>
    <v-container>
        <div>
            <v-card flat>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="3" md="3" lg="3"></v-col>
                        <v-col cols="12" sm="6" md="6" lg="6">
                        <v-autocomplete
                            v-model="model"
                            :items="items"
                            :loading="isLoading"
                            :search-input.sync="search"
                            clearable
                            hide-details
                            hide-selected
                            hide-no-data
                            item-text="name"
                            item-value="id"
                            label="Search for a coin ..."
                            solo
                        ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="3" md="3" lg="3"></v-col>
                    </v-row>
                </v-card-text>
            </v-card>
             
        </div>
       <!-- <div>
           <v-row justify="start">
               <v-col v-for="(slot, index) in slots" :key="index" cols="12"  sm="6" md="4">
                   <v-card class="mx-auto" max-width="344" >
                        <v-card-text>
                        <p class="h3 text--primary text-center"> <strong> {{slot.name}} </strong> </p>
                        <div class="text--primary">
                            <strong>Date:</strong> {{slot.date}}<br/>
                            <strong>Address:</strong><br/>
                            {{slot.block_name}}, {{slot.state_name}} - {{slot.pincode}}
                        </div>
                        </v-card-text>
                        <v-card-actions>
                        <v-btn text color="teal accent-4" small @click="slot.reveal = true">
                            Slots
                        </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                        <v-card v-if="slot.reveal" class="transition-fast-in-fast-out v-card--reveal py-0" style="height: 100%;">
                            <v-card-text class="py-1">
                            <p class="h2 text--primary text-center mb-3"> <strong> Slots </strong>  </p>
                            <v-row justify="center" v-for="(time,index) in slot.slots" :key="index">
                                <p class="text--primary my-1"> {{time}} </p>
                            </v-row>
                            </v-card-text>
                            <v-card-actions class="justify-center">
                            <v-btn text color="teal accent-4" @click="slot.reveal = false" small >
                                Close
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-expand-transition>
                    </v-card>
               </v-col>
           </v-row>
           
       </div> -->
    
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
      computed:{
        ...mapGetters('register', {
      firstnames: 'getFirstnames'
    })
    },
    data () {
      return {
        isLoading: false,
        model: null,
        search: null,
        filter:{},
        items:[],
        coin:null
      }
    },
    watch: {
        /* eslint-disable */
        model (val) {
        // console.log(val)

        fetch(`https://api.coingecko.com/api/v3/coins/${val}`)
            .then(res => res.clone().json())
            .then(res => {
                console.log(res)
                this.coin = res
            })
            .catch(err => {
                console.log(err)
            })

        },
        /* eslint-disable */
        search (val) {
            // console.log(val)
            // Items have already been loaded
            if (this.items.length > 0) return

            this.isLoading = true

            // Lazily load input items
            fetch('https://api.coingecko.com/api/v3/coins/list')
            .then(res => res.clone().json())
            .then(res => {
                // console.log(res)
                this.items = res
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => (this.isLoading = false))
        },
    },
    methods: {
      async searchCenters(){
          await this.$store.dispatch('search/searchCenters',this.filter)
          this.slots = JSON.parse(JSON.stringify(this.centerSlots))
      }
    },
    mounted(){
        // console.log(this.centerSlots)
        // this.$store.commit('search/setSlots',[])        
    }
  }
</script>
<style scoped>

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>