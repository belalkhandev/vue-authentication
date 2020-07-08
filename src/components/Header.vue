<template>
    <div>
        <div class="navigation">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/sign-in">Sign In</router-link></li>
                <li><router-link to="/dashboard">Dashboard</router-link></li>                
                <li><router-link to="/sign-in">Sign out</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: {
        //
    }
}
</script>