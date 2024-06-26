/**
 * Triggered when the push token is generated by the device.
 */
export const PushToken = 'push-token';

/**
 * Triggered when the user requests permission on the push event.
 */
export const PushPermissionRequest = 'push-permission-request';

/**
 * Returns the state of the push request of the device.
 */
export const PushPermissionState = 'push-permission-state';

/**
 * Check if the client is a webview in an iOS or iPadOS device.
 * @returns {boolean}
 */
export const usingAppleWebview = () => window.webkit && window.webkit.messageHandlers;

export const requestPushPermissionState = () => window.webkit.messageHandlers[PushPermissionState].postMessage(PushPermissionState);

export const requestPushPermissions = () => window.webkit.messageHandlers[PushPermissionRequest].postMessage(PushPermissionRequest);

export const requestPushToken = () => window.webkit.messageHandlers[PushToken].postMessage(PushToken);

export const usePWABuilder = () => {
  /**
   * @type {'notDetermined' | 'denied' | 'authorized' | 'ephemeral' | 'provisional' | 'unknown' | 'granted'}
   */
  let permissionState = 'granted';

  const handlePushPermissionRequest = (event) => {
    if (event.detail !== 'granted') {
      return;
    }

    permissionState = 'granted';

    requestPushToken();
  };

  const handlePushToken = (event) => {
    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/pwa/firebase-push-subscriptions',
      body: {
        token: event.detail,
      },
    });
  };

  const handlePushPermissionState = (event) => {
    permissionState = event.detail;

    m.redraw();
  };

  /**
   * @param {'notDetermined' | 'denied' | 'authorized' | 'ephemeral' | 'provisional' | 'unknown' | 'granted'} state
   *
   * @returns {boolean}
   */
  const hasFirebasePushState = (state) => state === 'authorized';

  function registerFirebasePushNotificationListeners() {
    if (usingAppleWebview()) {
      return;
    }
    requestPushPermissionState();

    window.addEventListener(PushPermissionRequest, handlePushPermissionRequest);
    window.addEventListener(PushPermissionState, handlePushPermissionState);
    window.addEventListener(PushToken, handlePushToken);
  }

  function removeFirebasePushNotificationListeners() {
    if (!usingAppleWebview()) {
      return;
    }

    window.removeEventListener(PushPermissionRequest, handlePushPermissionRequest);
    window.removeEventListener(PushPermissionState, handlePushPermissionState);
    window.removeEventListener(PushToken, handlePushToken);
  }

  return { hasFirebasePushState, registerFirebasePushNotificationListeners, removeFirebasePushNotificationListeners };
};
