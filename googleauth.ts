import { auth, docs } from '@googleapis/docs'
import { drive, auth as driveAuth } from '@googleapis/drive'

export const getDocsClient = async () => {
    const googleAuth = new auth.GoogleAuth({
        keyFilename: 'disco-city.json',
        scopes: ['https://www.googleapis.com/auth/documents'],
    })

    const authClient = await googleAuth.getClient()

    const client = docs({
        version: 'v1',
        auth: authClient as any,
    })

    return client
}

export const getDriveClient = async () => {
    const googleAuth = new driveAuth.GoogleAuth({
        keyFilename: 'disco-city.json',
        scopes: ['https://www.googleapis.com/auth/drive'],
    })

    const authClient = await googleAuth.getClient()

    const client = drive({
        version: 'v2',
        auth: authClient as any,
    })

    return client
}

export const getDocuments = async (pageToken: string | undefined) => {
    try {
        const googleDriveQueryId =
            `'1aMs45llANWQW0pUQMSL-ZbFG89eLtUGE' in parents`
        const driveClient = await getDriveClient()
        const driveFiles = await driveClient.files.list({
            q: googleDriveQueryId,
            maxResults: 15,
            pageToken: pageToken,
        })
        return driveFiles.data
    } catch (error) {
        console.log(error)
    }
}
