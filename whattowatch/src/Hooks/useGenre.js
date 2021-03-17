const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return " ";

    const GenreIDs = selectedGenres.map((n) => n.id);
    return GenreIDs.reduce((acc,curr) => acc + "," + curr);

};

export default useGenres;