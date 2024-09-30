```bash
yarn run migrate --environmentName=FFW --spaceId=83ly1vi0zb0q --accessToken=CFPAT-token
```
Helpful links:
1. https://www.contentful.com/developers/docs/tutorials/general/continuous-integration-with-circleci/
2. https://www.contentful.com/help/cms-as-code/
3. https://github.com/contentful/contentful-migration

## **Before running the script you have to:**

### **Create a new Content Type named versionTracking**

For CircleCI to know which migrations it should run, we’ll need to track which migrations have been run by adding a version number into Contentful. We accomplish this in Contentful by creating a new content model with an ID of versionTracking that has a single short-text-field named version.