import { Router } from "express"

const router = Router()

router.get("/v1", async (req, res) => {
  try {
    const pokemons = require("../../../static/processed/pokemon/v1.json")
    res.status(200)
    return res.json({
      pokemons
    })
  } catch (e) {
    console.log(e)
    res.status(400)
    return res.json({})
  }
})

export default router
