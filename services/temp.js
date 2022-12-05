//service

const putProductDataFeedFileOnS3 = (productDataFeedFile, fileKey) => new Promise((resolve) => {
    const { env } = process;
    const dateNow = moment().format('YYYYMMDD');
    const fileName = fileKey.substring(fileKey.lastIndexOf('/') + 1);
    s3Repository.putObject(productDataFeedFile, `/productdatafeed/${dateNow}/${fileName}`);
});

// repository

constParams = (params) => {
    const keyparams = {Bucket: env.bucket_name}
return {...keyparams, ...params};
}

const putObject = (body, key) => {
    const params = {
        Body: productDataFeedFile,
        Bucket: env.bucket_name,
        Key: `${env.bucket_folder}/productdatafeed/${dateNow}/${fileName}`
    };
    
    return s3.putObject(params, (err) => {
        if (err) {
            logError(err);
            throw new Error('Error copying file to archive');
        } else {
            resolve('Copying success');
        }
    });
}

