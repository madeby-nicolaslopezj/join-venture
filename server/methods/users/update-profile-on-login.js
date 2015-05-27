Accounts.onCreateUser(function(options, user) {
    if (user.services.google) {
        user.profile = { 
            firstName: user.services.google.given_name,
            lastName: user.services.google.family_name,
            picture: user.services.google.picture
        }
        user.emails = [{ address: user.services.google.email, verified: true }];
    }

    if (user.services.linkedin) {
        var accessToken = user.services.linkedin.accessToken;
        var basicProfileFields = ['first-name', 'last-name', 'maiden-name', 'formatted-name', 'phonetic-first-name','phonetic-last-name', 'formatted-phonetic-name', 'headline', 'location','industry', 'num-connections', 'num-connections-capped', 'summary', 'specialties', 'positions', 'picture-url', 'picture-urls::(original)', 'site-standard-profile-request'],
            emailFields = ['email-address'],
            fullProfileFields = ['last-modified-timestamp', 'proposal-comments', 'associations', 'interests', 'publications','patents', 'languages', 'skills', 'certifications', 'educations','courses', 'volunteer', 'three-current-positions', 'three-past-positions', 'num-recommenders', 'recommendations-received', 'following', 'job-bookmarks', 'suggestions', 'date-of-birth'],
            contactInfoFields = ['phone-numbers', 'bound-account-types', 'im-accounts', 'main-address', 'twitter-accounts', 'primary-twitter-account'];
        var requestUrl = 'https://api.linkedin.com/v1/people/~:(' + _.union(basicProfileFields, emailFields, fullProfileFields, contactInfoFields).join(',') + ')';

        var response = HTTP.get(requestUrl, {
            params: {
                oauth2_access_token: accessToken,
                format: 'json'
            }
        });
        user.services.linkedin.data = response.data;

        user.profile = { 
            firstName: user.services.linkedin.data.firstName,
            lastName: user.services.linkedin.data.lastName,
            picture: user.services.linkedin.data.pictureUrl,
        }

        user.emails = [{ address: user.services.linkedin.data.emailAddress, verified: true }];
    }

    return user;
});