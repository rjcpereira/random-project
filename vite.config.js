import { legacy } from 'sp-dev-x-kit'

export default legacy(import.meta.url);

//same as: 

/* 
import xKit from 'sp-dev-x-kit'

export default xKit(import.meta.url, {
    legacy: true
});
*/