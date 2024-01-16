export type Character = {
  id: number,
  name: string,
  image: string,
  status:string,
  species: string,
  gender: string, 
  type: string,
  location: {
    name:string
  }
}

export type Characters = Character[]