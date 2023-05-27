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
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import axios from 'axios'

Route.post('/execute', async ({ request, response }: HttpContext) => {
  try {
    const { language, content } = request.only(['language', 'content'])
    const s3API = 'https://6be3f047dd5127f12c24c19a56397f50.r2.cloudflarestorage.com/codepass-test'

    // R2 Codepass Token - 30 Days Validity
    const endpoint = 'https://6be3f047dd5127f12c24c19a56397f50.r2.cloudflarestorage.com'
    const bucket = 'codepass-test'
    const accessKeyId = '7e544451df1079711d80c3f413762f3f'
    const accessKeySecret = 'dce1ba349d8395c3151570d6780c16a656a8fa7b9e8dd7242223bcf6af1f43bc'
    const S3 = new S3Client({
      region: 'auto',
      endpoint: endpoint,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: accessKeySecret,
      },
    })

    if (language === 'python') {
      const listBuckets = await S3.send(new ListBucketsCommand(''))
      // console.log(listBuckets)

      const listObjects = await S3.send(new ListObjectsV2Command({ Bucket: bucket }))
      // console.log(listObjects)

      const objectKey = 'users/1/main.py'
      // console.log(content)

      // const putObjectCommand = new PutObjectCommand({
      //   Bucket: bucket,
      //   Key: objectKey,
      //   Body: content,
      //   ACL: 'public-read',
      // })

      // const putObject = await S3.send(putObjectCommand)
      // console.log(putObject)

      // if (!putObject.ETag) return response.internalServerError()
      if (false) return response.internalServerError()
      else {
        let source = 'https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/' + objectKey
        let test = 'https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/' + 'test_main.py'

        const res = await axios.post('http://127.0.0.1:8000/docker/python', { source, test })
        return response.status(200).send(res.data)
      }
    }

    return response.ok('Ok')
  } catch (error) {
    return response.internalServerError()
  }
})

// https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/users/1/main.py
// https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/main.py
// https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/test.py
// https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/test_main.py
