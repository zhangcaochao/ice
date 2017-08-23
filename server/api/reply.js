export default async(ctx,next) =>{
    const message = ctx.weixin
    console.log(message)
    ctx.body  = message
}
    
