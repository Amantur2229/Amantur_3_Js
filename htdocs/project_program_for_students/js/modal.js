// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
setTimeout(openModal, 10000)
modal.onclick = (event) => {
    event.stopPropagation()
    event.target === modal && closeModal()
}

function checkScroll() {
    const scrollWindow = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    if (scrollWindow + windowHeight >= pageHeight) {
        openModal()
    }
}
window.addEventListener("scroll", checkScroll);



