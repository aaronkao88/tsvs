import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, colors } from 'quasar'

colors.setBrand('primary', '#1F2C58');
colors.setBrand('secondary', '#404F80');
colors.setBrand('bg_1', '#121A33');
colors.setBrand('bg_2', '#9DB1F2');
colors.setBrand('bg_3', '#A4AECC');
colors.setBrand('action', '#800000');

Vue.use(Quasar, {
  config: {},
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  }
 })