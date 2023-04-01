const itemButtons = document.querySelectorAll(".accordion-item .accordion-header i")
const itemContents = document.querySelectorAll(".accordion-item .accordion-content")

itemButtons.forEach(itemButton => {
    itemButton.addEventListener("click", function () {
        const item = itemButton.parentNode.parentNode
        const accordionItems = Array.from(item.parentNode.children)

        item.classList.toggle("active")

        accordionItems.forEach(accordionItem => {
            const accordionText = accordionItem.lastElementChild
            if (!accordionItem.classList.contains("active")) {
                console.log(accordionItem);
                accordionText.style.display = "none"
            }
            else{
                accordionText.style.display = "block"
            }
            accordionItem.classList.remove("active")
        })
    })
})

// $(document).ready(function(){
//     const itemButtons = $(".accordion-item .accordion-header i")
//     const itemContents = $(".accordion-item .accordion-content")

//     itemButtons.each(function(){
//         $(this).click(function(){
//             const item = $(this).parent().parent()
//             const content = $(this).parent().next()
//             item.toggleClass("active")
            
//             item.siblings().removeClass("active")
//         })
//     })
// })