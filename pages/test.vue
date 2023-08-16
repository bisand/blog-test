<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth()
</script>

<template>
    <div>
        <div>
            <p>
                <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
            </p>
            <p>
                <button @click="signIn(`github`)">
                    JS Sign In
                </button>
            </p>
            <p>
                <button @click="signOut()">
                    Sign Out
                </button>
            </p>
        </div>
        <div>
            <pre>{{ status }}</pre>
            <pre>{{ session?.user }}</pre>
            <pre>{{ cookies }}</pre>
        </div>
</div></template>