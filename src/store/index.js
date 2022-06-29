import { createStore } from 'vuex'

import journal from "../modules/daybook/store/journal/index";

export const store = createStore({
    modules:{
        journal
    }
})