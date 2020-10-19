const createS3Object = require('./services/s3Service.js').createS3Object;
const deleteS3Object = require('./services/s3Service.js').deleteS3Object;

exports.handler = async (event) => {

    if(event.operation ==="createS3Object") {
        return await createS3Object(event);
    }
    if(event.operation ==="deleteS3Object") {
        return await deleteS3Object(event);
    }
};