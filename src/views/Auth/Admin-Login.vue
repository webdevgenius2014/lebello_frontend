<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/Admin-components/Form-checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/components/Admin-components/InputError.vue';
import InputLabel from '@/components/Admin-components/form-components/InputLabel.vue';
import PrimaryButton from '@/components/Admin-components/Buttons/PrimaryButton.vue';
import TextInput from '@/components/Admin-components/form-components/TextInput.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// import axios from '@/helper/axios';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = ref({
    email: '',
    password: '',
    remember: false,
    errors: {},
    processing: false,
});
// store code
const store = useStore();
const router = useRouter();
// const response = await axios.post('/login', { form });

const handleLogin = () => {
    

  const token = process.env.TOKEN
   store.dispatch('login', {token , form }); // Dispatch login action with token and user data
  router.push('/'); // Navigate to home or another route
};
</script>

<template>
    <GuestLayout>
        <template v-slot:header>
            <Head title="Log in" />
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>        
        <form @submit.prevent="handleLogin">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>
            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>
            <div class="flex items-center justify-between mt-4">
                <a
                    v-if="canResetPassword"
                    href="#"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                > Forgot your password?
                </a>
                <PrimaryButton class="ms-4" :class="{'opacity-25': form.processing }" :disabled="form.processing"> Log in </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
