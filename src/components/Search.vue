<template>
    <v-container>
        <div>
            <v-card flat>
                <v-card-text>
                    <v-container grid-list-md text-xs-center>
                        <v-layout row wrap>
                            <v-flex offset-md4 xs12 sm12 md4>
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
                            </v-flex>
                            <v-flex offset-md4 xs12 sm12 md4 mt-2>
                                <Date label="Select Date"/>
                            </v-flex>
                        </v-layout>
                      </v-container>
                </v-card-text>
            </v-card>
             
        </div>
    
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Date from '../basic/date'
  export default {
      components:{Date},
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