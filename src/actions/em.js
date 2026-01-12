// // "use server";

// import { transporter } from "@/lib/email";

// const from=process.env.GMAIL_ADDRESS;

// export async function emailSending(){
//     await transporter.sendMail(
//         {
//             from:from,
//             to:"mansoorsabir200@gmail.com",
//             subject: "first email",
//             html: " this is first email right now ?? be onloine"
//         }
//     )
// }
// // 
// // host: "smtp.gmail.com",
// // port: 465,
// // secure: true,
// // auth: {
// //   user: "your_email@gmail.com",
// //   pass: "APP_PASSWORD"
// // }
