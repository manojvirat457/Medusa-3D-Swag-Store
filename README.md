<p align="center"> 
  <a href="https://www.medusa-commerce.com"> 
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/153162406-bf8fd16f-aa98-4604-b87b-e13ab4baf604.png" width="100" />
  </a>
</p>
<h1 align="center">
Medusa's 3D Swag Store
</h1>

<p align="center">

This is a demo store built with [Medusa](https://www.medusajs.com). It is a fully functional e-commerce store that you can use to test out Medusa and we have implemented 3D swag store functionality. Swags are 3D models that can be viewed by the customer before they purchase them.
</p>

<img src= "assets/Cover.png">

<br>

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ca08976-104d-49d1-b1fb-2381b61ac51c/deploy-status)](https://app.netlify.com/sites/medusa-hackathon/deploys) - **Not Deployed Fully**

<br>

## About the Team behind this project 👨🏻‍💻

**Team**

- [Manoj Kumar](https://github.com/manojvirat457) - [Discord](https://discordapp.com/users/930392488643031050): `manojkumar1808#9514`
- [Krishna Agarwal](https://github.com/MrKrishnaAgarwal) - [Discord](https://discordapp.com/users/983949353171447838): `KrishnaAgarwal#3748`
- [Tamil Prakash](https://github.com/TamilPrakash-S): `Tamil#4879`

**Credits to contributors who helped but didn't participate in the hackathon.**

- [Pradheep](https://github.com/iamdheep)


### Description

This is an idea, just to prove that medusa can be easily adaptable and customizable upto any limits. Everything you can imagine and that is possible to implement with Medusa. 3D preview feature is something where Amazon, Flipkart etc... are implementing and investing on it. This repo will clear the doubts of the people on choosing medusa as their first choice for their e-commerce idea and will also help them to get started with medusa.
Also, this is a complete working example of medusa, so you can use it as a boilerplate for your e-commerce idea.

### Preview

#### Regular Preview
[![Watch the video](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/thumbnail.png)](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Full Preview
[![Watch the video](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/thumb2.png)](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Zoom, Pan & Rotate Preview 
[![Watch the video](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/thub3.png)](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Video

[Watch the demo video here](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Store Preview

[![Watch the video](https://github.com/manojvirat457/Medusa-3D-Swag-Store/blob/main/assets/store.png)](https://clipchamp.com/watch/QePScELklT9)


[Store Preview](https://clipchamp.com/watch/QePScELklT9)

#### Overview

![image](https://user-images.githubusercontent.com/100597998/194545519-7b7b5db4-657f-4f55-9aca-eef5a121a5ae.png)


![image](https://user-images.githubusercontent.com/100597998/194545593-8a1e931d-7ea6-4268-b10d-c50a9e2784d1.png)

## Set up Project

This section should cover how to set up and run the project locally. It’s intended to help the Medusa team properly review our submission, as well as help the community to benefit from our submission. Please read it thoroughly and implement it.

### Port details
 - Redis - 6379
 - Postgres - 5432
 - Minio - 9000, 9001
 - Backend - 3000
 - Admin - 7000
 - Store - 8000

### Prerequisites

We have listed the Prerequisites below:

Examples of Prerequisites:

- Medusa Server [Quickstart](https://docs.medusajs.com/quickstart/quick-start).
- Create an account in service X (for integrations with other services).
- Redis, PostgreSQL, or any of Medusa’s configurations or plugins.
- Minio local setup `docker run -p 9000:9000 -d -p 9001:9001 -e "MINIO_ROOT_USER=minio99" -e "MINIO_ROOT_PASSWORD=minio123" quay.io/minio/minio server /data --console-address ":9001"
`.

### Install Project

1. Clone the repository:

```bash
git clone https://github.com/manojvirat457/Hacktoberfest-medusa
```

2. Change directory and install dependencies:

```bash
cd Hacktoberfest-medusa
yarn install
```

3. Start the project:

```bash
medusa develop
```
4. Open the project in your browser:

```bash
http://localhost:3000
```

5. Login with the following credentials:

```bash
email: admin@medusa-test.com
password: supersecret
```

### To run admin
1. Go to the root folder
2. execute `cd admin-portal`
3. Install dependencies 
```bash
  yarn install
```
4. Start the project
```bash
yarn start
```

### To run Store
1. Go to the root folder
2. execute `cd store`
3. Install dependencies 
```bash
  yarn install
```
4. Start the project
```bash
yarn build
yarn start
```

**The project is now running locally, and you can start customizing it, or use it as a base for your own project 🎉**

`You can use some sample 3d files you can find under assets/3d files folder` [Here](https://github.com/manojvirat457/Medusa-3D-Swag-Store/tree/main/assets/3d%20files)

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details

## Resources
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Documentation](https://docs.medusajs.com)
- [How to Create Services](https://docs.medusajs.com/advanced/backend/services/create-service)
- [Gatsby Documentation](https://www.gatsbyjs.com/docs)
- [Medusa Blog](https://medusajs.com/blog)


## RoadMap
- Multi-tenant implementation - Completed
- Sales & Revenue Dashboards - Inprogress
- Super Admin access & permissions
- Microsoft Power BI Implementation
- Metabase connections
- Analytics
- Product Search

### 👨‍💻 Our Awesome Maintainers and Contributors 👩‍💻

<a href="https://github.com/manojvirat457/Hacktoberfest-medusa/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=manojvirat457/Medusa-3D-Swag-Store" />
</a>

## Contributing

We welcome contributions from everyone. Please read our [contributing guidelines](/CONTRIBUTING.md) to get started.

## Code of Conduct

We have adopted a Code of Conduct that we expect project participants to adhere to. Please read the [full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

We'll deploy the project on heroku and share the link soon. 🚀

### Happy Hacking! 🎃

<img src= "https://github.com/manojvirat457/Medusa-3D-Swag-Store/blob/main/assets/Cover%20Template.png" />

