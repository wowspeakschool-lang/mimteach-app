// Only the personal teacher schedule has the date selector and no teacher picker.
function addObservationLink() {
  const schedule = document.querySelector('.sch-wrap .sch')
  const toolbar = schedule?.querySelector('.sch__tools')
  if (!toolbar || !schedule.querySelector('.sch__date') || schedule.querySelector('[aria-label="Преподаватель"]')) return
  if (toolbar.querySelector('[data-mim-observations]')) return
  const link = document.createElement('a')
  link.dataset.mimObservations = ''
  link.className = 'sch__sync'
  link.textContent = 'Карты наблюдения'
  link.href = '/karty/'
  link.addEventListener('click', () => {
    const date = schedule.querySelector('.sch__date')?.value
    if (date) link.href = '/karty/?po=' + encodeURIComponent(date)
  })
  toolbar.append(link)
}
const root = document.getElementById('root')
if (root) {
  new MutationObserver(addObservationLink).observe(root, { childList: true, subtree: true })
  addObservationLink()
}
