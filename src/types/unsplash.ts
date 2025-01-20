export interface UnsplashResponse {
  total: number
  total_pages: number
  results: Photo[]
}

export interface Photo {
  id: string
  created_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string | null
  user: User
  urls: Urls
  links: Links
}

export interface User {
  id: string
  username: string
  name: string
  first_name: string
  last_name: string
  instagram_username: string | null
  twitter_username: string | null
  portfolio_url: string | null
  profile_image: ProfileImage
  links: Links
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface Links {
  self: string
  html: string
  photos?: string
  likes?: string
  download?: string
}
