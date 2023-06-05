import { reactive } from 'sp-dev-x-kit/scripts/utils'
import { onUpdate } from 'sp-dev-x-kit/scripts/events'
import component from 'sp-dev-x-kit/widgets/mapa'

let app, done;

const widget = reactive({
    zoomable: true
})

done = onUpdate(() => {
    if (app) return !done ? null : done();
    const target = document.getElementById('example');
    if (!target) return;
    app = new component({
        target,
        props: {
            widget
        }
    });
});