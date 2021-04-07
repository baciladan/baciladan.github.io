window.onload = () => {
    let arrayOfPortfolioItems = document.getElementsByClassName('orderNumber');
    for (let i = 0; i < arrayOfPortfolioItems.length; i++) {
        if (i < 9) {
            arrayOfPortfolioItems[i].append(0, i + 1);
        } else {
            arrayOfPortfolioItems[i].append(i + 1);
        }
    }
}