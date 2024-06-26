const baseURL = 'https://api.themoviedb.org/3'

const movies = '/movie'
const genres ='/genre/movie/list'
const movies_list ='/discover/movie'
const search ='/search/movie'

const urls = {
    movies_list:movies_list,
    search:search,
    genres:genres,
    movies: {
        base: movies,
        byId: (id: number): string => `${movies}/${id}`,
        images: (id: number): string => `${movies}/${id}/images`,
    },
}

export {
    baseURL,
    urls
}