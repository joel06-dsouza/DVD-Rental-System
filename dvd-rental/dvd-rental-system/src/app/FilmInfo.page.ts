// import { FilmInfo } from './FilmInfo.model';
import { FilmInfo } from "./FilmInfo.model"

export interface FilmInfoPage {
    content: FilmInfo[],
    pageable: {
        pageNumber: number,
        pageSize: number,
        sort: {
            empty: boolean,
            unsorted: boolean,
            sorted: boolean
        },
        offset: number,
        unpaged: boolean,
        paged: boolean
    },
    totalElements: number,
    totalPages: number,
    last: boolean,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        unsorted: boolean,
        sorted: boolean
    },
    numberOfElements: number,
    first: boolean,
    empty: boolean
}