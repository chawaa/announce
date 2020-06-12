import { extend } from 'flarum/extend';
import Application from 'flarum/Application';

import Announce from './components/Announce';

app.initializers.add('heidongwang-announce', () => {
    extend(Application.prototype, 'mount', () => {
        const footer = document.createElement('div');

        m.mount(document.body.appendChild(footer), Announce.component());
    });
});
