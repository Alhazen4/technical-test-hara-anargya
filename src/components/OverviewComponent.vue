<script setup>
    import { ref, reactive, computed } from 'vue';

    import city from '../assets/js/city.js'
    import province from '../assets/js/province.js'

    let reactiveProvince1 = reactive(province)
    const sortOrder = reactive({ value: 1 });
    const reactiveProvince2 = reactive(reactiveProvince1);

    const sortedArray = computed(() => {
        return [...reactiveProvince2].sort((a, b) => (a.id - b.id) * sortOrder.value);
    });

    const nameFilter = ref('');
    const filteredAndSortedArray = computed(() => {
        let filteredArray = [...province];

        if (nameFilter.value) {
            filteredArray = filteredArray.filter((item) =>
            item.name.toLowerCase().includes(nameFilter.value.toLowerCase())
            );
        }

        return filteredArray.sort((a, b) =>
            sortOrder.value * a.name.localeCompare(b.name)
        );
    });

    const sortAscending = () => {
        sortOrder.value = 1;
    };

    const sortDescending = () => {
        sortOrder.value = -1;
    };

    const nameSortAscending = () => {
        sortOrder.value = 1;
    };

    const nameSortDescending = () => {
        sortOrder.value = -1;
    };

    const selected = ref('');
    const inputProv = ref('');
    const inputCity = ref('');
    let showCityFilter = ref([]);
    let showProvinceFilter = ref('');

    let showCityName = ref('');
    let showProvinceName = ref('');
    
    function searchCity(id) {
        let provinceFilter = province.filter((obj) => obj.id === id)
        showProvinceFilter.value = provinceFilter[0].name

        let cityFilter = city.filter((obj) => obj.provinsi_id === id)
        showCityFilter.value = cityFilter
    }

    function searchProvince(id) {
        let cityId = city.filter((obj) => obj.id === id)
        let provinceCityId = cityId[0].provinsi_id
        let provinceName = province.filter((obj) => obj.id === provinceCityId)
        showCityName.value = cityId[0].name
        showProvinceName.value = provinceName[0].name
    }

    const name = "pink-tabs";
    let tab = ref(1);
    const currentTab = (tabNumber) => {
        tab.value = tabNumber;
    };

</script>

<template>
    <div>
        <div class="container mx-auto">
            <ul class="flex justify-center space-x-2 text-white mt-10">
                <li>
                    <button @click="currentTab(1)" class="btn-custom-tab">
                        Cities in a Province
                    </button>
                </li>
                <li>
                    <button @click="currentTab(2)" class="btn-custom-tab">
                        Know the City's Province
                    </button>
                </li>
                <li>
                    <button @click="currentTab(3)" class="btn-custom-tab">
                        List All Provinces
                    </button>
                </li>
            </ul>

            <div class="p-3 mt-6 bg-white border drop-shadow-md rounded-md">
                <div v-if="tab === 1">
                    <div class="flex flex-column items-center justify-center ">
                        <div class="bg-white w-3/4 h-96">
                            <h1 class="mb-5 text-black">Input Province ID to know cities inside it</h1>
                            <input v-model="inputProv" placeholder="Input Province ID" type="number" class="bg-white drop-shadow-md appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            <button @click="searchCity(inputProv)" class="btn-custom-tab ml-4">Search</button>
                            <h1 class="mb-5 mt-5 text-black">Provinsi: {{ showProvinceFilter }}</h1>

                            <div class="max-h-60 overflow-auto block">
                                <table class="table-auto w-full h-4">
                                    <thead class="sticky top-0">
                                        <tr>
                                            <th align="center" class="px-3 text-xs font-semibold text-slate-600">Id</th>
                                            <th align="left" class="px-3 text-xs font-semibold text-slate-600">City</th>
                                        </tr>
                                    </thead>
                    
                                    <tbody class="overflow-scroll">
                                        <template v-for="data in showCityFilter">
                                            <tr class="w-full">
                                                <td align="center" class="px-3 text-xs font-semibold text-slate-600">
                                                    {{ data.id }}
                                                </td>
                                                <td align="left" class="px-3 text-xs font-semibold text-slate-600">
                                                    {{ data.name }}
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="tab === 2">
                    <div>
                        <input v-model="inputCity" placeholder="Input City ID" type="number" class="bg-white shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        <button @click="searchProvince(inputCity)" class="btn-custom-tab ml-4">Search</button>

                        <div class="mt-4 flex flex-col">
                            <label class="text-black">City Name:</label>
                            <label class="bg-white shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                {{ showCityName }}
                            </label>
                            <label class="text-black">Province Name:</label>
                            <label class="bg-white shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                {{ showProvinceName }}
                            </label>
                        </div>
                    </div>
                </div>

                <div v-if="tab === 3">
                    <div>
                        <div class="text-black flex flex-col justify-center items-center">
                            <h1>Select the filter of the province</h1>
                            <select v-model="selected" class="mt-4 block appearance-none w-28 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option disabled value="">Filter By:</option>
                                <option default>Id</option>
                                <option>Name</option>
                            </select>
                        </div>

                        <div class="text-black mt-4 flex justify-center items-center">
                            <template v-if="selected === 'Id'">
                                <div class="text-black flex flex-column">
                                    <button @click="sortAscending()" class="btn-custom-tab">
                                        ASC
                                    </button>
                                    <button @click="sortDescending()" class="btn-custom-tab ml-4">
                                        DESC
                                    </button>
                                </div>
                            </template> 
                            <template v-if="selected === 'Name'">
                                <div class="text-black flex flex-column">
                                    <button @click="nameSortAscending()" class="btn-custom-tab">
                                        ASC
                                    </button>
                                    <button @click="nameSortDescending()" class="btn-custom-tab ml-4">
                                        DESC
                                    </button>
                                </div>
                            </template>
                        </div>

                        <div class="mt-4 max-h-72">
                            <ul class="text-black">
                                <template v-if="selected === 'Id'">
                                    <div class="max-h-60 overflow-auto block">
                                        <table class="table-auto w-full h-4">
                                            <thead class="sticky top-0">
                                                <tr>
                                                    <th align="center" class="px-3 text-xs font-semibold text-slate-600">No</th>
                                                    <th align="center" class="px-3 text-xs font-semibold text-slate-600">Id</th>
                                                    <th align="left" class="px-3 text-xs font-semibold text-slate-600">City</th>
                                                </tr>
                                            </thead>
                            
                                            <tbody>
                                                <template v-for="(data, index) in sortedArray" :key="data.id">
                                                    <tr class="w-full">
                                                        <td align="center" class="px-3 text-xs font-semibold text-slate-600">
                                                            {{ index + 1 }}
                                                        </td>
                                                        <td align="center" class="px-3 text-xs font-semibold text-slate-600">
                                                            {{ data.id }}
                                                        </td>
                                                        <td align="left" class="px-3 text-xs font-semibold text-slate-600">
                                                            {{ data.name }}
                                                        </td>
                                                    </tr>
                                                </template>
                                            </tbody>
                                        </table>
                                    </div>
                                </template>
                                <template v-if="selected === 'Name'">
                                    <div class="max-h-60 overflow-auto block">
                                        <table class="table-auto w-1/2 h-4">
                                            <thead class="sticky top-0">
                                                <tr>
                                                    <th align="center" class="px-3 text-xs font-semibold text-slate-600">No</th>
                                                    <th align="center" class="px-3 text-xs font-semibold text-slate-600">Id</th>
                                                    <th align="left" class="px-3 text-xs font-semibold text-slate-600">City</th>
                                                </tr>
                                            </thead>
                            
                                            <tbody>
                                                <template v-for="(data, index) in filteredAndSortedArray" :key="data.id">
                                                    <tr class="w-full">
                                                        <td align="center" class="px-3 text-xs font-semibold text-slate-600">
                                                            {{ index + 1 }}
                                                        </td>
                                                        <td align="center" class="px-3 text-xs font-semibold text-slate-600">
                                                            {{ data.id }}
                                                        </td>
                                                        <td align="left" class="px-3 text-xs font-semibold text-slate-600">
                                                            {{ data.name }}
                                                        </td>
                                                    </tr>
                                                </template>
                                            </tbody>
                                        </table>
                                    </div>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>