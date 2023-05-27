/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { HttpContext } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Hello world from a slim app'
})

import {
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
} from '@aws-sdk/client-s3'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { apis } from 'Config/apis'

// R2 Codepass Token - 30 Days Validity
const endpoint = Env.get('R2_S3_ENDPOINT')
const bucket = Env.get('R2_S3_BUCKET')
const accessKeyId = Env.get('R2_S3_ACCESS_KEY_ID')
const secretAccessKey = Env.get('R2_S3_SECRET_ACCESS_KEY')
// console.log(endpoint, bucket, accessKeyId, secretAccessKey)
const S3 = new S3Client({
  region: 'auto',
  endpoint: endpoint,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
})

Route.post('/execute', async ({ request, response }: HttpContext) => {
  try {
    const { language, content } = request.only(['language', 'content'])

    if (language === 'python') {
      const listBuckets = await S3.send(new ListBucketsCommand(''))
      // console.log(listBuckets)

      const listObjects = await S3.send(new ListObjectsV2Command({ Bucket: bucket }))
      // console.log(listObjects)

      const objectKey = 'users/1/main.py'
      // console.log(content)

      const putObjectCommand = new PutObjectCommand({
        Bucket: bucket,
        Key: objectKey,
        Body: content,
        ACL: 'public-read',
      })

      const putObject = await S3.send(putObjectCommand)
      // console.log(putObject)

      if (!putObject.ETag) return response.internalServerError()
      else {
        let source = 'https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/' + objectKey
        let test = 'https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/' + 'test_main.py'

        const res = await axios.post(apis.executePython, { source, test })
        return response.status(200).send(res.data)
      }
    }

    if (language === 'javascript') {
      const listBuckets = await S3.send(new ListBucketsCommand(''))
      // console.log(listBuckets)

      const listObjects = await S3.send(new ListObjectsV2Command({ Bucket: bucket }))
      // console.log(listObjects)

      const objectKey = 'users/1/main.js'
      // console.log(content)

      const putObjectCommand = new PutObjectCommand({
        Bucket: bucket,
        Key: objectKey,
        Body: content,
        ACL: 'public-read',
      })

      const putObject = await S3.send(putObjectCommand)
      // console.log(putObject)

      if (!putObject.ETag) return response.internalServerError()
      else {
        let source = 'https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/' + objectKey
        let test = 'https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/' + 'test.js'

        const res = await axios.post(apis.executeJavaScript, { source, test })
        return response.status(200).send(res.data)
      }
    }

    return response.status(200).send('Ok')
  } catch (error) {
    console.log(error)
    return response.internalServerError()
  }
})
