import Env from '@ioc:Adonis/Core/Env'

export const api = Env.get('DOCKER_API')
export const apis = {
  executePython: `${api}/python`,
}
