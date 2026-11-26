/* global window, document, localStorage, setTimeout */
// GA4 init with Consent Mode v2, loaded as a same-origin file so no inline script is needed.
;(function () {
  var s = document.currentScript
  var id = s && s.getAttribute('data-ga-id')
  if (!id) return
  // Do Not Track / Global Privacy Control: no analytics at all
  var nav = window.navigator || {}
  if (nav.doNotTrack === '1' || nav.doNotTrack === 'yes' || window.doNotTrack === '1' || nav.globalPrivacyControl === true) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 })
  try {
    var c = JSON.parse(localStorage.getItem('iiraan-consent') || 'null')
    if (c && c.choice === 'granted') window.gtag('consent', 'update', { analytics_storage: 'granted' })
  } catch { /* no storage: stay denied */ }
  window.gtag('js', new Date())
  window.gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false })
  // gtag.js replays the dataLayer queue whenever it arrives, so it can wait until the page is loaded and idle:
  // it never competes with the page's own scripts, images or first interaction.
  function loadGtag() {
    var g = document.createElement('script')
    g.async = true
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id)
    document.head.appendChild(g)
  }
  function whenIdle() {
    if (window.requestIdleCallback) window.requestIdleCallback(loadGtag, { timeout: 4000 })
    else setTimeout(loadGtag, 1500)
  }
  if (document.readyState === 'complete') whenIdle()
  else window.addEventListener('load', whenIdle, { once: true })
})()
