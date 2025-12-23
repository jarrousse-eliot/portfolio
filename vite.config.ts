import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import i18next from '@vitejs/plugin-i18next'

export default defineConfig({
    plugins: [react(), i18next()], 
    base: '/portfolio/'
})


