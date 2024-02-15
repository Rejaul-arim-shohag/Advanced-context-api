const classList = {
    bigItem: "col-span-12 grid grid-cols-12 gap-4",

    secondItem: 'col-span-12 grid grid-cols-12 gap-4 lg:col-span-8',
    secondItemThumbs: 'class="col-span-12 md:col-span-6"',

    anotherItem: "col-span-12 md:col-span-6 lg:col-span-4"
}

const getSectionWidthClassName = (index) => {
    if (index === 0) {
        return {bigItem};
    } else if (index === 1) {
        return {secondItem, secondItemThumbs};
    } else {
        return anotherItem
    }
}