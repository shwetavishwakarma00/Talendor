import nodemailer from "nodemailer";


export async function POST(req) {
    try {
         const {name , email ,message} = await req.json()

         const transporter  = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:Number(process.env.SMTP_PORT),
            secure:true,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
         }) 

         await transporter.sendMail({
            from:process.env.SMTP_USER,
            to:process.env.ADMIN_EMAIL,
            replyTo:email,
            subject:"talendor mail",
            text:`
              Name : ${name}
              Email: ${email}
              Message : ${message}
            `
         })

         return Response.json(
            {success : true , message : "Email Successfully Send"},
            {status : 200}
         )


    } catch (error) {
        console.log("Email Error", error)

        return Response.json(
            {success : false , message : "failed to send mail"},
            { status : 500 }
        )
    }
    
}
