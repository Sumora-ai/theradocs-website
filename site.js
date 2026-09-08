// Centralized contact configuration. Replace this value when Narapy's public
// mailbox is ready; all contact links across the site update automatically.
const CONTACT_EMAIL = 'info@narapy.de'

document.querySelectorAll('[data-contact-link]').forEach((link) => {
  const subject = link.dataset.contactSubject
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  link.setAttribute('href', `mailto:${CONTACT_EMAIL}${query}`)
})

document.querySelectorAll('[data-contact-email]').forEach((link) => {
  link.textContent = CONTACT_EMAIL
})

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear())
})

const menuButton = document.querySelector('.menu-toggle')
const mobileNavigation = document.querySelector('#mobile-navigation')

function setMenuOpen(open) {
  if (!menuButton || !mobileNavigation) return
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Navigation schließen' : 'Navigation öffnen')
  mobileNavigation.hidden = !open
}

menuButton?.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})

mobileNavigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false)
    menuButton?.focus()
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) setMenuOpen(false)
})
