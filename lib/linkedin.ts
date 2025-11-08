// LinkedIn API utilities
// Note: LinkedIn API requires OAuth 2.0 authentication
// For a portfolio site, we'll use the LinkedIn Profile Badge as a simpler alternative
// If you want full API access, you'll need to register an app at https://www.linkedin.com/developers/

export interface LinkedInProfile {
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture?: string;
  publicProfileUrl: string;
}

// LinkedIn Profile Badge URL generator
export function getLinkedInBadgeUrl(profileUrl: string, locale: string = 'en_US'): string {
  const encodedUrl = encodeURIComponent(profileUrl);
  return `https://www.linkedin.com/profile/view?id=${encodedUrl}&trk=profile-badge&locale=${locale}`;
}

// For static portfolio, we'll embed the LinkedIn profile badge
// You can also manually add your LinkedIn data here for build time
export const LINKEDIN_PROFILE = {
  profileUrl: 'https://www.linkedin.com/in/logannitzsche', // Update with your LinkedIn URL
  firstName: 'Logan',
  lastName: 'Nitzsche',
  headline: 'Full Stack Developer',
};

// If you want to use the LinkedIn API with OAuth, you'll need:
// 1. Register your app at https://www.linkedin.com/developers/
// 2. Get Client ID and Client Secret
// 3. Implement OAuth flow
// 4. Use the Member API to fetch profile data

// Example OAuth config (uncomment and add your credentials if using full API)
/*
export const LINKEDIN_CONFIG = {
  clientId: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  redirectUri: process.env.LINKEDIN_REDIRECT_URI || 'http://localhost:3000/api/auth/linkedin/callback',
  scope: 'r_liteprofile r_emailaddress',
};
*/
