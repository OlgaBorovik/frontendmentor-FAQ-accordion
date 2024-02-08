const details = document.querySelectorAll('details')

details.forEach(detail => {
    detail.addEventListener("toggle", (event) => {
        const plusBtn = detail.querySelector('.icon--plus')
        const minusBtn = detail.querySelector('.icon--minus')
            if (detail.open) {
                plusBtn.classList.add('hidden')
                minusBtn.classList.remove('hidden')
            } else {
                plusBtn.classList.remove('hidden')
                minusBtn.classList.add('hidden')
                }
                });
})

