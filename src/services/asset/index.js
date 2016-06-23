import errors from 'feathers-errors'
import makeDebug from 'debug'
import CurrentIE from 'current-ie'

const debug = makeDebug('feathers-currentie:asset')

class Service {
  constructor (options = {}) {
    if (!options.token) {
      throw new Error('CurrentIE - GE Predix `token` needs to be provided')
    }

    if (!options.zoneId) {
      throw new Error('CurrentIE - GE Predix `zoneId` needs to be provided')
    }

    this.currentie = new CurrentIE(options.token, options.zoneId)
  }

  find (params) {
    return new Promise((resolve, reject) => {
      // Put some async code here.
      if (!params.query) {
        return reject(new errors.BadRequest())
      }

      resolve([])
    })
  }

  get (id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject(new errors.BadRequest('`id` needs to be provided'))
      }

      return this.currentie.getAssetDetailByAssetId(id).then(resolve).catch(reject)
    })
  }
}

export default function init (options) {
  debug('Initializing feathers-currentie:asset plugin')
  return new Service(options)
}

init.Service = Service
