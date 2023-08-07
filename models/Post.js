import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title:{type: String, required:true},
    caption:{type: String, required: true},
    slug:{type: String, required: true, unique: true},
    body:{type: Object, required:true},
    photo:{type: String, required: false},
    user:{type: Schema.Types.ObjectId, ref:"User"},//reference to the user model
    tags:{type:[String]},
    categories: [{type: Schema.Types.ObjectId, ref: "PostCategories"}]

},
{timestamps:true, toJSON:{virtuals: true}}
);

//the virtual is used to create a relationship btw post n comment
PostSchema.virtual("comments", {
    ref:"Comment",
    localField: "_id", //id of this post schema
    foreignField: "post" //postid in the comment schema
})

const Post = model("Post",PostSchema);
export default Post;