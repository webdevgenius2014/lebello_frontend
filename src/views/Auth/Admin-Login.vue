<template>
    <GuestLayout>
      <!-- <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
      </div> -->
      <form @submit.prevent="handleLogin">
        <div>
          <TextInput
            name="email"
            type="email"
            label="Email"
            :errMessage="errors.email"
            v-model="form.email"
            placeholder="Email"
            :class="{ 'border-red-500': errors.email }"
            @update:model="$clearError(errors,'email')"
          />
        </div>
  
        <div class="mt-4">
          <TextInput
            name="password"
            type="password"
            label="Password"
            :errMessage="errors.password"
            v-model="form.password"
            placeholder="Password"
            :class="{ 'border-red-500': errors.password }"
            @update:model="$clearError(errors,'password')"
          />
        </div>
  
        <div class="block mt-4">
          <label class="flex items-center">
            <Checkbox name="remember" v-model:checked="form.remember" label="Remember me" />
          </label>
        </div>
  
        <div class="flex items-center justify-between mt-4">
          <router-link to="/forget-password"  href="#" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Forgot your password?
          </router-link>
          <Button type="submit" class="ms-4" :class="{ 'opacity-25': processing }" :disabled="processing" bg_th_color="bg-[#2271b1] text-white px-3 py-2">
            Log in
          </Button>
        </div>
      </form>
    </GuestLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import GuestLayout from '@/Layouts/GuestLayout.vue';
  import Button from '@/components/Admin-components/Buttons/Button.vue';
  import TextInput from '@/components/Admin-components/form-components/TextInput.vue';
  import Checkbox from '@/components/Admin-components/form-components/CheckBox.vue';
  import { useStore } from 'vuex';
  import LoginService from '@/services/loginServices/LoginServices';
  import { useRouter } from 'vue-router';

  
  
  const form = ref({
    email: '',
    password: '',
    remember: false,
  });
  
  const store = useStore();
  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      if (validateForm()) {
        processing.value = true;
        const user = { ...form.value };
        const token = "token"
        store.dispatch('login', { token, user });
        router.push('/admin');
        // LoginService.login(user)
        // .then(res => {
        //   console.log('Login Response:', res.data);
        //   store.dispatch('login', { token, payload });
        //   router.push('/admin');
        //   if (res.status === 200 && res?.data?.success === true) {
        //   store.dispatch('login', { token, user });
        //   processing.value = false;        }
        // if (res.status === 401) {
        //   processing.value = false;
              
        // }
        // })
      }
    } catch (e) {
      console.error('Error while log in:', e);
    } finally {
      processing.value = false;
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    errors.value = {};
  
    if (!form.value.email) {
      errors.value.email = 'Email is required';
      isValid = false;
    }
  
    if (!form.value.password) {
      errors.value.password = 'Password is required';
      isValid = false;
    }
  
    return isValid;
  };
  
  </script>
  