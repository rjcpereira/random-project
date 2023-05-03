import { reactive } from 'x-kit/scripts/utils'
//import { writable } from 'svelte/store';
import { onUpdate } from 'x-kit/scripts/events'
import Tempo from 'x-kit/widgets/tempo/tempo'

let app, done;

const widget = reactive({//writable({
    lite: true
})

done = onUpdate(() => {
    if (app) return !done ? null : done();
    const target = document.getElementById('bsu-placeholder');
    if (!target) return;
    app = new Tempo({
        target,
        props: {
            widget
        }
    });
});