<template>
    <div>
        {{ form }}
        <div class="sign-form">
            <form @submit.prevent="submit">
                <h2 class="title">Sign in</h2>
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="text" placeholder="Enter email or username" name="email" class="form-control" v-model="form.email">
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" placeholder="Enter password" name="password" class="form-control"  v-model="form.password">
                </div>
                <div class="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Signin',
    components: {
        //
    },
    data () {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        async submit () {
            let response = axios.post('user/login', this.form);
            console.log(response.data);
        }
    }
}
</script>