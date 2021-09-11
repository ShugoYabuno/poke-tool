/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs")

for (let i = 1; i <= 8; i++) {
  const genJp: Record<
    string,
    unknown
  >[] = require(`../static/original/pokemon-data.json/jp/gen${i}-jp.json`)
  const genEn: Record<
    string,
    unknown
  >[] = require(`../static/original/pokemon-data.json/en/gen${i}-en.json`)

  const evolutions: {
    name: string
    eggMoves: string[]
  }[] = []
  const formatted = genJp.map((_pokemon: any) => {
    const abilities = [...new Set(_pokemon.abilities)]
    const levelUpMoves = _pokemon.level_up_moves.map((_move: any) => _move[1])
    const tms = _pokemon.tms.map((_move: any) => _move[1])

    const eggMoves: string[] = _pokemon.egg_moves
    const findEvolution = evolutions.find(
      (_evolution) => _evolution.name === _pokemon.name
    )
    if (findEvolution) {
      eggMoves.concat(findEvolution.eggMoves)
    }

    const moves = [...new Set([...levelUpMoves, ...tms, ...eggMoves])]

    if (eggMoves.length >= 1 && _pokemon.evolutions.length >= 1) {
      _pokemon.evolutions.forEach((_evolution: any) => {
        const evolution = {
          name: _evolution.species.replace(/-\d/, ""),
          eggMoves
        }
        evolutions.push(evolution)
      })
    }

    return {
      name: _pokemon.name,
      nameEn: genEn[i].name,
      types: _pokemon.types,
      baseStats: {
        hitPoint: _pokemon.base_stats[0],
        attack: _pokemon.base_stats[1],
        defense: _pokemon.base_stats[2],
        spAttack: _pokemon.base_stats[3],
        spDefense: _pokemon.base_stats[4],
        speed: _pokemon.base_stats[5],
        total: _pokemon.base_stats[6]
      },
      abilities,
      moves
    }
  })

  fs.writeFileSync(
    `./static/processed/pokemon/v1/gen${i}.json`,
    JSON.stringify(formatted)
  )
}
