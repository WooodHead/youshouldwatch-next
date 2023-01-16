import type { MediaDetails, SearchResult } from "../types";
export function detailsToSearchResult(
  details: MediaDetails,
  mediaType: string
) {
  const result: SearchResult = {
    media_type: mediaType,
    adult: details.adult,
    backdrop_path: details.backdrop_path,
    poster_path: details.poster_path,
    genre_ids: details.genres.map((g) => g.id),
    id: details.id,
    original_language: details.original_language,
    original_title: details.original_title,
    overview: details.overview,
    popularity: details.popularity,
    release_date: details.release_date,
    title: details.title,
    name: details.name,
    video: details.video,
    vote_average: details.vote_average || null,
    vote_count: details.vote_count || null,
  };
  return result;
}

export function rememberLastLogin(email: string) {
  try {
    localStorage.setItem("last_login", email);
    return true;
  } catch (err) {
    console.error("Unable to local store the last_login", err);
    return false;
  }
}

export function getLastLogin() {
  try {
    const v = localStorage.getItem("last_login");
    if (v) return v;
    return "";
  } catch (err) {
    console.error("Unable to local store the last_login", err);
    return "";
  }
}