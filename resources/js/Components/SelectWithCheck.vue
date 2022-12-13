<script setup>
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'
import JetInputError from '@/Components/InputError.vue';
import {onMounted, ref} from 'vue'

const props = defineProps([
    'modelValue',
    'label',
    'message',
    'options'
]);

const emit = defineEmits(['update:modelValue'])
const modelValue = ref(props.modelValue)

if (typeof props.modelValue.value === 'undefined') {
    console.log('here')
    modelValue.value = props.options[0]
    emit('update:modelValue', modelValue)
}
</script>

<template>
    <div class="w-full">
        <Listbox as="div"
                 v-model="modelValue"
                 @update:modelValue="value => emit('update:modelValue', value)"
                 by="id"
        >
            <ListboxLabel class="block text-sm font-medium text-gray-700" v-text="label"></ListboxLabel>
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span class="block truncate capitalize" v-text="modelValue.name"></span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </span>
                </ListboxButton>
                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                    <ListboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption as="template" v-for="option in options" :key="option.id" :value="option"
                                       v-slot="{ active, selected }">
                            <li
                                :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']"
                                      v-text="option.name"/>
                                <span v-if="selected"
                                      :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                                    <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
        <JetInputError :message="message" class="mt-2"/>
    </div>
</template>
