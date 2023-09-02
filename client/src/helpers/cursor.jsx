const toggleClassCursor = (cursor, isHover) => {
    if(isHover) {
        cursor.current.classList.add("cursor--hovered")
    } else {
        cursor.current.classList.remove("cursor--hovered")
    }
}

export {toggleClassCursor}