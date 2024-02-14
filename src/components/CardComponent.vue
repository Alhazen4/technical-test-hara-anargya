<script setup>
    const props = defineProps(['item']);
</script>

<template>
    <div class="card drop-shadow-md">
        <div class="card-body rounded-t-lg flex flex-row justify-between px-7 py-7">
        <div class="flex flex-col gap-1 items-start">
            <div>
            <p class="text-gray-400">
                {{ item.status }}
            </p>
            </div>

            <div>
            <p class="text-black text-xl font-semibold">
                {{ item.value }}
            </p>
            </div>
        </div>

        <button class="bg-card-btn h-35px w-35px p-1 rounded flex item-baseline justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 24 24"><g fill="none" stroke="#817f7f" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M17 10H7l3.438-3M7 14h10l-3.437 3"/><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/></g></svg>
        </button>

        </div>

        <div class="card-footer rounded-b-lg bg-card-footer flex flex-row justify-between px-4">
        <div class="flex flex-row gap-3 items-baseline py-3">
            <template v-if="item.trend === 'up'">
                <p class="text-card-text-green flex flex-row font-semibold">
                    <template v-if="item.trend === 'up'">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" class="rotate-45">
                                <path fill="#4cbf93" d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"/>
                            </svg>
                        </span>
                    </template>
                    {{ item.percent }}%
                    <span class="text-gray-500 ml-1 font-medium">
                        Last Month
                    </span>
                </p>
            </template>

            <template v-if="item.trend === 'down'">
                <p class="text-card-text-red flex flex-row font-semibold">
                    <template v-if="item.trend === 'down'">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 256 256" class="-rotate-45">
                                <path fill="#ee7c85" d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"/>
                            </svg>
                        </span>
                    </template>
                    {{ item.percent }}%
    
                    <span class="text-gray-500 ml-1 font-medium">
                        Last Month
                    </span>
                </p>
            </template>
        </div>
        <div class="flex flex-row gap-3 items-baseline py-3">
            <p class="text-neutral-500 font-semibold text-xs leading-6">View More</p>
        </div>
        </div>
    </div>
</template>