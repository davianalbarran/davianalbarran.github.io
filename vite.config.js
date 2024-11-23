import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown'
import matter from 'gray-matter'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdown({
      mode: ['html', 'toc'],
      markdownIt: {
        html: true,
        breaks: true,
        linkify: true
      },
      frontmatter: true,
      transforms: {
        before: (code) => {
          const { data, content } = matter(code)
          return {
            code: content,
            frontmatter: data
          }
        }
      }
    })
  ],
})