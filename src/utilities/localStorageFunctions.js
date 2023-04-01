const addToDb = (title, id) => {
    let storedMovieList = getStoredMovieList();
    const newMovie = {
        name: title,
        id: id
    }
    storedMovieList = [...storedMovieList, newMovie]
    localStorage.setItem("movie-list", JSON.stringify(storedMovieList))
}


const getStoredMovieList = () => {
    let storedMovieList = []

    const storedData = localStorage.getItem("movie-list");
    if (storedData) {
        storedMovieList = JSON.parse(storedData)
    }

    return storedMovieList;
}

const removeFromDb = id => {
    const storedMovieList = getStoredMovieList();
    const newStoredList = storedMovieList.filter((list) => list.id !== id)
    localStorage.setItem("movie-list", JSON.stringify(newStoredList))
}

export {
    addToDb,
    getStoredMovieList,
    removeFromDb
}