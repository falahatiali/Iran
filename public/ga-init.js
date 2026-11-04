/* global window, document, localStorage */
// GA4 init with Consent Mode v2, loaded as a same-origin file so no inline script is needed.
;(function () {
  var s = document.currentScript
  var id = s && s.getAttribute('data-ga-id')
  if (!id) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 })
  try {
    var c = JSON.parse(localStorage.getItem('iiraan-consent') || 'null')
    if (c && c.choice === 'granted') window.gtag('consent', 'update', { analytics_storage: 'granted' })
  } catch { /* no storage: stay denied */ }
  window.gtag('js', new Date())
  window.gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false })
})()
