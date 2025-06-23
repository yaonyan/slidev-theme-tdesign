import { defineAppSetup } from '@slidev/types'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

export default defineAppSetup(({ app, router }) => {
  app.use(TDesign)
})
