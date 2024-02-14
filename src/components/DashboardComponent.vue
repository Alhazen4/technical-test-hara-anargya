<script setup>
    import PopUpComponent from './PopUpComponent.vue';
    import CardComponent from './Cardcomponent.vue';
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const cardData = [
        { status: 'Pending', value: '2.483,30', percent: '2,15', trend: 'up'},
        { status: 'Paid', value: '84.310', percent: '1,10', trend: 'down'},
        { status: 'Rejected', value: '12.155', percent: '2,15', trend: 'up'},
    ];

    let tableData = ref([])
    let selectedData = ref({})

    let isModalVisible = ref(false)

    const closeModal = () => {
        isModalVisible.value = false;
    };
    
    const toggleModal = (id) =>{
        axios.get('https://api.slingacademy.com/v1/sample-data/users')
        .then(res => {
            let filteredData = res.data.users.filter((obj) => obj.id === id)
            selectedData.value = filteredData
            console.log(filteredData)
        }
        )
        isModalVisible.value = !isModalVisible.value;
    };

    onMounted(() => {
        axios.get('https://api.slingacademy.com/v1/sample-data/users')
        .then(res => {
            const formattedArray = res.data.users.map((obj) => {
                const date = new Date(obj.date_of_birth);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                obj.date_of_birth = `${day} / ${month} / ${year}`;
                return { ...obj };
            });

            tableData.value = formattedArray
            }
        )
    })

</script>

<template>
    <div class="flex flex-col items-center justify-center">
        
        <div class="flex flex-row gap-6 my-8" >
            <CardComponent v-for="(item, index) in cardData" :key="index" :item="item"/>
        </div>
        
        <div class="card-table">
            
            <div class="h-65px border-b px-5 py-5 flex item-baseline">
            <p class="text-black font-semibold text-xl">
                User List
            </p>
            </div>

            <div class="max-h-60 overflow-auto block">
                <table class="table-auto w-full h-4">
                    <thead class="sticky top-0">
                        <tr>
                        <th align="center" class="px-3 text-xs font-semibold text-slate-600">ID</th>
                        <th align="center" class="px-3 text-xs font-semibold text-slate-600">User</th>
                        <th></th>
                        <th align="left" class="text-xs font-semibold text-slate-600">Date of Birth</th>
                        <th align="left" class="text-xs font-semibold text-slate-600">Email</th>
                        <th align="left" class="text-xs font-semibold text-slate-600">Job</th>
                        <th align="left" class="text-xs font-semibold text-slate-600">Country</th>
                        <th class="text-xs font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
    
                    <tbody class="overflow-scroll">
                        <template v-for="data in tableData">
                            <tr class="w-full">
                                <td align="center" class="px-3 text-xs font-semibold text-slate-600">
                                    {{ data.id }}
                                </td>
                                <td align="center">
                                    <img :src="data.profile_picture" alt="">
                                </td>
                                <td align="left" class="font-semibold text-xs">
                                    {{ data.first_name }} {{ data.last_name }}
                                </td>
                                <td align="left" class="text-xs">
                                    {{ data.date_of_birth }}
                                </td>
                                <td align="left" class="font-semibold text-xs">{{ data.email }}</td>
                                <td align="left" class="text-xs">{{ data.job }}</td>
                                <td align="left" class="font-semibold text-xs">{{ data.country }}</td>
                                <td>
                                    <button class="btn-custom mr-2 font-semibold">Select</button>
                                    <button class="btn-custom font-semibold" @click=toggleModal(data.id)>View Detail</button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

        </div>
        
        <PopUpComponent :data="selectedData" :isVisible="isModalVisible" @onClosePopup="closeModal" />
    </div>
</template>