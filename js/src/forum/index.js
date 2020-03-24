import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';
import LinkButton from 'flarum/components/LinkButton';
import SessionDropdown from 'flarum/components/SessionDropdown';

app.initializers.add('askvortsov/flarum-pwa', () => {
  extend(Page.prototype, 'init', res => {
    const basePath = app.forum.attribute('basePath').trimRight('/');
    document.querySelector('#manifest').setAttribute('href', basePath + '/webmanifest.json');

    if ("serviceWorker" in navigator) {
      if (!navigator.serviceWorker.controller) {
        navigator.serviceWorker
          .register(basePath + "/sw.js")
          .then(function (reg) {
            console.log("Service worker has been registered for scope: " + reg.scope);
          });
      }
    }
  });

  extend(SessionDropdown.prototype, 'items', items => {
    const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');
    console.log(isInStandaloneMode());
    if (isInStandaloneMode() && items.has('administration')) {
      items.replace('administration',
        LinkButton.component({
          icon: 'fas fa-wrench',
          children: app.translator.trans('core.forum.header.admin_button'),
          href: app.forum.attribute('adminUrl'),
          config: function (element, isInitialized) {
            if (isInitialized) return;
            $(element).on('click', e => {
              e.stopPropagation()
              m.route.apply(this, arguments);
              window.location.reload()
            });
          }
        }))
    }
  })
});