<template>
    <client-only>
        <div class="flex h-screen overflow-hidden" :class="{ 'dark': isDarkMode }">
            <!-- Sidebar -->
            <sidebar :isSidebarOpen="isSidebarOpen" :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode"></sidebar>
            <!-- Overlay -->
            <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
                class="bg-gray-900 bg-opacity-90 fixed w-screen h-screen lg:hidden"></div>

            <!-- Main Content -->
            <main class="main-content overflow-y-auto custom-scrollbar">
                <!-- Mobile Header -->
                <div class="lg:hidden py-3 px-6 bg-primary dark:bg-navy flex items-center text-white">
                    <button @click="isSidebarOpen = true" class="p-2 ml-2 bg-gray-100 bg-opacity-10 rounded-full">
                        <menu-icon></menu-icon>
                    </button>
                    <h1 class="text-center text-2xl flex-grow ">Hasibur Rahman</h1>
                </div>

                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>

                <!-- Footer -->
                <footer class="p-6">
                    <p class="text-center"> Template Copyright © <span class="text-primary">3rd Wave Media</span> </p>
                </footer>
            </main>
        </div>
    </client-only>
</template>

<script>
import Sidebar from '@/components/sections/Sidebar.vue';
import MenuIcon from '@/components/icons/menu-alt-1.vue';
export default {
    components: {
        Sidebar,
        MenuIcon
    },
    data() {
        return {
            isDarkMode: false,
            isSidebarOpen: false
        };
    },

    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
        },
        storageDarkMode() {
            const hasValue = localStorage.getItem('isDarkMode');

            if (!hasValue) localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
            else this.isDarkMode = JSON.parse(hasValue);
        },
    },
    mounted() {
        this.storageDarkMode();
    },
    watch: {
        $route(to, from) {
            this.isSidebarOpen = false;
        }
    },
};
</script>

<style lang="scss" scoped>
// Main Content
.main-content {
    @apply w-full text-black dark:text-white dark:bg-black transition-all duration-300;
}
</style>