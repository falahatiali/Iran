import type { H3Error, H3Event } from 'h3'

export default (error: H3Error, event: H3Event) => {
  const url = event.node?.req?.url || ''
  
  // Return real 404 for missing assets instead of serving HTML
  if (url.startsWith('/assets/') && error.statusCode === 404) {
    if (event.node?.res) {
      event.node.res.statusCode = 404
      event.node.res.setHeader('Content-Type', 'text/plain')
    }
    return 'Not Found'
  }
  
  // Default error handling for other routes
  return error.message || 'Server Error'
}
