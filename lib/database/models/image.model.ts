import { model, models, Schema, Document } from "mongoose";

export interface Image extends Document {
    title: string;
    transformaitonType: string;
    publicId: string;
    secureId: string;

    width?: number;
    height?: number;
    config?: object;
    transformtionUrl?: string;

    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author:{
        id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId:{type: String, required: true},
    secureId: {type: URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String },
    color: {type: String},
    prompt: {type: String},
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now }
});

const Image = models.Image || model('Image', ImageSchema)

export default Image;