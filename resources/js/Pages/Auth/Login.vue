<script setup>
import {Head, Link, useForm} from '@inertiajs/inertia-vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {usePage} from '@inertiajs/inertia-vue3'
import {ref, computed} from 'vue'

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const env = computed(() => usePage().props.value.env)

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
const auto = () => {
    if (form.email === '') {
        form.email = 'test@example.com'
    }
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post('/laravel-login-link-login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in"/>

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo/>
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
        <div class="flex space-x-2 mb-2">
            <Link :href="route('oauth','google')" class="underline text-sm text-gray-600 hover:text-gray-900">
                Google
            </Link>
            <Link :href="route('oauth','facebook')" class="underline text-sm text-gray-600 hover:text-gray-900">
                Facebook
            </Link>
        </div>
        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email"/>
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.email"/>
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password"/>
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                />
                <InputError class="mt-2" :message="form.errors.password"/>
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember"/>
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link v-if="canResetPassword" :href="route('password.request')"
                      class="underline text-sm text-gray-600 hover:text-gray-900">
                    Forgot your password?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
                <PrimaryButton
                    x-if="env === 'local'"
                    @click="auto"
                    class="ml-4"
                    :class="{ 'opacity-25': form.processing }"
                    type="button"
                    :disabled="form.processing">
                    Auto
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>
