<template>
    <q-form action="https://some-url.com" method="post">
        <q-input v-model="input.email" filled type="email" hint="Email" />
        <q-input v-model="input.password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
            <template v-slot:append>
                <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                />
            </template>   
        </q-input>
    </q-form>
</template>

<script>
export default {
    name: 'Login',
    props: {
                
    },
    data() {
        return {
            input: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.email != "" && this.input.password != "") 
            {
                    this.$router.push('/home');

                        /*if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                            this.$emit("authenticated", true);
                            this.$router.replace({ name: "secure" });
                        } else {
                            console.log("The username and / or password is incorrect");
                        }
                    } else {
                        console.log("A username and password must be present");
                    
                    */
                    console.log("USERNAME:"+this.input.email);
                    console.log("PASSWORD:"+this.input.password);
                }
            }
    }
}
</script>

<style scoped>

</style>