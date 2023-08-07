import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    desc: {type: String, required: true},
    post: {type: Schema.Types.ObjectId, ref: "Post", required: true},
    check:{type: Boolean, default: false},
    parent: {
        type: Schema.Types.ObjectId,
        ref:"Comment",
        default: null,
    },
    replyOnUser:{
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
    }
},
{timestamps:true, toJSON: {virtuals: true}}
);

CommentSchema.virtual("replies", {
    ref:"Comment",
    localField: "_id", //id of this post schema
    foreignField: "parent" //parent in the comment schema must match the local id comment
})

const Comment = model("Comment",CommentSchema);
export default Comment;