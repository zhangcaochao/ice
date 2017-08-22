const tip = '我的卡丽熙，欢迎来到我的家园'

export default async(ctx,next) =>{
    const message = ctx.weixin
    console.log(message)
    ctx.body  = tip
}
    
