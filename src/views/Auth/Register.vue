<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/components/Admin-components/form-components/InputError.vue';
import InputLabel from '@/components/Admin-components/form-components/InputLabel.vue';
import PrimaryButton from '@/components/Admin-components/Buttons/PrimaryButton.vue';
import TextInput from '@/components/Admin-components/form-components/TextInput.vue';
import { ref } from 'vue';
import LoginServices from '@/services/loginServices/LoginServices';

const errors = ref({})
const processing = ref(false)
const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const validateForm = () => {
        let isValid = true;
        errors.value = {};
        if (!form.value.name) {
            errors.value.name = 'Name is required';
            isValid = false;
        }
        if (!form.value.email) {
            errors.value.email = 'Email is required';
            isValid = false;
        }
        if (!form.value.password) {
            errors.value.password = 'Password is required';
            isValid = false;
        }
        if (form.value.password.length < 6) {
            errors.value.password = 'Password must be longer than 6 characters';
            isValid = false;
        }

        if (!form.value.password_confirmation) {
            errors.value.password_confirmation = 'Confirm is required';
            isValid = false;
        }
        if (form.value.password !== form.value.password_confirmation) {
            errors.value.password_confirmation = 'passwords must be matched ';
            isValid = false;
        }
        
        return isValid;
    };
const submit = () => {
    try {
        if (validateForm()) {
            console.log(form.value)
            // processing.value = true;
            // const user = { ...form.value };
            // const token = "token"
            // store.dispatch('login', { token, user });
            // router.push('/admin');
            // LoginServices.register(payload)
            // .then(res => {
            //   console.log('register Response:', res.data);
            //   router.push('/login');
            //   if (res.status === 200 && res?.data?.success === true) {
            //   processing.value = false;        }
            // if (res.status === 401) {
            //   processing.value = false;
            // }
            // })
        }
    } catch (e) {
        console.error('Error while register:', e);
    } finally {
        processing.value = false;
    }
};
</script>

<template>
    <GuestLayout>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput
            name="name"
            type="text"
            label=""
            autofocus
            autocomplete="name"
            placeholder=""
            :errMessage="errors.name"
            v-model="form.name"
            :class="{ 'border-red-500': errors.name }"
            @update:model="$clearError(errors,'name')"
          />
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />
                <TextInput
            name="email"
            type="email"
            label=""
            autofocus
            autocomplete="name"
            placeholder=""
            :errMessage="errors.email"
            v-model="form.email"
            class="mt-1 block w-full"
            :class="{ 'border-red-500': errors.email }"
            @update:model="$clearError(errors,'email')"
          />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput
            name="password"
            type="password"
            label=""
            placeholder=""
            :errMessage="errors.password"
            v-model="form.password"
            class="mt-1 block w-full"
            :class="{ 'border-red-500': errors.password }"
            @update:model="$clearError(errors,'password')"
          />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput
            name="password"
            type="password"
            label=""
            placeholder=""
            :errMessage="errors.password_confirmation"
            v-model="form.password_confirmation"
            class="mt-1 block w-full"
            :class="{ 'border-red-500': errors.password_confirmation }"
            @update:model="$clearError(errors,'password_confirmation')"
          />
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    href="route('login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
