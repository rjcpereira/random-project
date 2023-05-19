import { reactive } from 'sp-dev-x-kit/scripts/utils'
import { onUpdate } from 'sp-dev-x-kit/scripts/events'
import Tempo from 'sp-dev-x-kit/widgets/tempo/tempo.svelte'

let app, done;

const widget = reactive({
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