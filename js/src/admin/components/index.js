import app from 'flarum/app';
import AnnounceSettingsModal from './components/AnnounceSettingsModal';

app.initializers.add('heidongwang-announce', () => {
    app.extensionSettings['heidongwang-announce'] = () => app.modal.show(new AnnounceSettingsModal());
});
