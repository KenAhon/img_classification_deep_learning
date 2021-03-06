import {
    SET_DISPLAY_IMAGE,
    UPLOAD_IMAGE_REQUEST,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAILURE,
    PROMPT_IMAGE_UPLOAD
} from '../constants/imageUploadConstants';


export function setDisplayImage(base64image) {
    return {
        type: SET_DISPLAY_IMAGE,
        payload: {
            base64image
        }
    }
}

export function promptImageUpload(prompt) {
    return {
        type: PROMPT_IMAGE_UPLOAD,
        payload: {
            prompt
        }
    }
}

export function uploadImage() {
    return {
        type: UPLOAD_IMAGE_REQUEST
    }
}

export function uploadImageSuccess() {
    return {
        type: UPLOAD_IMAGE_SUCCESS
    }
}

export function uploadImageFailure(error) {
    return {
        type: UPLOAD_IMAGE_FAILURE,
        payload: {
            error
        }
    }
}