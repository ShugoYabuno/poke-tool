export interface Pokemon {
  name: string
  nameEn: string
  types: string
  image: string
  baseStats: {
    hitPoint: string
    attack: string
    defense: string
    spAttack: string
    spDefense: string
    speed: string
    total: string
  }
  abilities: string
  moves: string
}
