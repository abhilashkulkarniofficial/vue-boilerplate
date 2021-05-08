<template>
    <v-container fluid >
    <v-card flat tile class="justify-center">
        <v-card-text > 
            <v-row>
                <v-col cols="12" sm="3" md="3"></v-col>
                <v-col cols="12" sm="6" md="6">
                    <v-card flat max-width="500px" align="center">
                        <v-card-subtitle>
                            Register a user matey!
                        </v-card-subtitle>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                            
                                <v-text-field v-model="firstName" :counter="10" :rules="nameRules" label="First Name" required outlined dense></v-text-field>

                                <v-text-field v-model="lastName" :counter="10" :rules="nameRules" label="Last Name" required outlined dense></v-text-field> 

                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required outlined dense></v-text-field>

                                <v-text-field v-model="pincode" :counter="6" :rules="pincodeRules" label="Pincode" required outlined dense></v-text-field>

                                <v-text-field v-model="age" :counter="3" :rules="ageRules" label="Age" required outlined dense></v-text-field>

                                <v-select v-model="select" :items="items" label="Gender" outlined dense></v-select>

                                <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="I agree" required dense small></v-checkbox>

                                <v-btn :disabled="!valid" color="success" class="mr-4" @click="registerUser"> Subscribe </v-btn>
                            </v-form>
                        </v-card-text>
                        
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3" md="3"></v-col>
            </v-row>
        </v-card-text>
      
    </v-card>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
        ...mapGetters('register', {  
            users: 'getUsers'
    })
    },
    data () {
      return {
        valid: true,
        firstName: '',
        lastName: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        pincode: '',
        pincodeRules: [
            v => !!v || 'Pincode is required',
            v => /^[1-9][0-9]{5}$/.test(v) || 'Pincode must be valid',
        ],
        age: '',
        ageRules: [
            v => !!v || 'Age is required',
            v => (v>0 && v<150 )|| 'Age must be valid',
        ],
        select: null,
        items: [
            'Male',
            'Female',
            'Prefer Not to Answer'
        ],
        checkbox: false,
        }
    },
    mounted(){
        // this.$store.dispatch('search/searchCenters',"this")
    },
    methods:{
    //     validate () {
    //     this.$refs.form.validate()
    //   },
    //   reset () {
    //     this.$refs.form.reset()
    //   },
    //   resetValidation () {
    //     this.$refs.form.resetValidation()
    //   },

    // class="d-flex justify-center"
    //  flat align="center"
        async registerUser(){
            let val = this.$refs.form.validate()

            if(val){
                let userData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    pincode: this.pincode,
                    gender: this.select,
                    agreement: this.checkbox
                }

                await this.$store.dispatch('register/register', userData)
                console.log(this.users)
                // this.$refs.form.reset()
            }
            
        }
    }
  }
</script>