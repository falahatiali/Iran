/* global window, document */
// GA4 init, loaded as a same-origin file so no inline script is needed.
;(function () {
  var s = document.currentScript
  var id = s && s.getAttribute('data-ga-id')
  if (!id) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false })
})()
