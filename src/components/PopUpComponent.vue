<script setup>
    import { defineProps, defineEmits, ref } from 'vue';
    import axios from 'axios';

    const { isVisible, data } = defineProps(['isVisible', 'data']);
    const emit = defineEmits(['onClosePopup']);
    let userData = {}
    const formattedData = ref({});

    const closePopup = () => {
        emit('onClosePopup');
    };
</script>

<template>
    <transition name="fade" v-if="isVisible"> 
        <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div class="w-555px h-436px bg-card-footer drop-shadow-md rounded-lg flex items-baseline justify-items-center">
                <div class="w-full px-9">
                    
                    <div class="flex justify-end w-full pt-9">
                        <button @click="closePopup">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 512 512"><path fill="#ee7c85" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/></svg>
                        </button>
                    </div>
                        
                    <div class="flex flex-row gap-10">
                        <template v-for="data in data">
                            <img :src="data.profile_picture" alt="" class="w-28 h-28 rounded-full">
                            <div class="flex items-center justify-center">
                                <div class="text-black text-left">
                                    <h1 class="font-medium text-2xl">{{ data.first_name }}</h1>
                                    <h1 class="font-medium text-lg">{{ data.email }}</h1>
                                    <h1 class="font-medium text-lg">{{ data.phone }}</h1>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>