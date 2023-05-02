import Component from 'x-kit/components/dev'
import { onUpdate } from 'x-kit/scripts/events'

let app;

onUpdate(() => {

    if (!app) {
        const target = document.getElementById('imported');
        if (!target) return;
        app = new Component({
            target
        })
    }

});