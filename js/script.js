// const itemButtons = document.querySelectorAll(".accordion-item .accordion-header i")
// const itemContents = document.querySelectorAll(".accordion-item .accordion-content")

// itemButtons.forEach(itemButton => {
//     itemButton.addEventListener("click", function () {
//         const item = itemButton.parentNode.parentNode
//         item.classList.toggle("active")
//     })
// })

$(document).ready(function(){
    const itemButtons = $(".accordion-item .accordion-header i")
    const itemContents = $(".accordion-item .accordion-content")

    itemButtons.each(function(){
        $(this).click(function(){
            const item = $(this).parent().parent()
            item.toggleClass("active")
        })
    })
})