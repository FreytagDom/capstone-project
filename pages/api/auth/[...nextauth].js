import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

// const providers = [];
// if (process.env.VERCEL_ENV === 'preview') {
//   providers.push(
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         if (
//           credentials.username === 'test' &&
//           credentials.password === 'test'
//         ) {
//           return {
//             name: 'Test User',
//             email: 'test@example.com',
//           };
//         } else {
//           return null;
//         }
//       },
//     })
//   );
// } else {
//   providers.push(
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
  ],
  // );
};

// };
export default NextAuth(authOptions);
