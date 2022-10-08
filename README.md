## Medusa's 3D Swag Store

<img src= "assets/Cover Template.png">

<br>

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ca08976-104d-49d1-b1fb-2381b61ac51c/deploy-status)](https://app.netlify.com/sites/medusa-hackathon/deploys)

<br>

## About

### Participants

**Team**

- [Manoj Kumar](https://github.com/manojvirat457) - [Discord](https://discordapp.com/users/930392488643031050)
- [Krishna Agarwal](https://github.com/MrKrishnaAgarwal) - [Discord](https://discordapp.com/users/983949353171447838)
- [Tamil Prakash](https://github.com/TamilPrakash-S) - [Discord](https://discordapp.com/users/1028260631356395601)

### Description

In this section, give a description of what your submission is. It should be a maximum of 100 words, and it should revolve around Medusa and how your submission customizes it or what it adds to it.

### Preview

#### Regular Preview
[![Watch the video](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/thumbnail.png)](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Full Preview
[![Watch the video](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/thumb2.png)](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Zoom, Pan & Rotate Preview 
[![Watch the video](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/thub3.png)](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Watch Video

[Watch the video here](https://github.com/manojvirat457/Hacktoberfest-medusa/blob/main/assets/admin.mp4)

#### Store Preview

[![Watch the video](https://github.com/manojvirat457/Medusa-3D-Swag-Store/blob/main/assets/store.png)](https://clipchamp.com/watch/QePScELklT9)


[Store Preview](https://clipchamp.com/watch/QePScELklT9)

#### Overview


![image](https://user-images.githubusercontent.com/100597998/194545519-7b7b5db4-657f-4f55-9aca-eef5a121a5ae.png)
![image](https://user-images.githubusercontent.com/100597998/194545593-8a1e931d-7ea6-4268-b10d-c50a9e2784d1.png)

## Set up Project

This section should cover how to set up and run the project locally. It’s intended to help the Medusa team properly review your submission, as well as help the community to benefit from your submission.

### Port details
 - Redis - 6379
 - Postgres - 5432
 - Minio - 9000, 9001
 - Backend - 3000
 - Admin - 7000
 - Store - 8000

### Prerequisites

If running your submission requires any prerequisites, make sure to list them in this section.

Examples of Prerequisites:

- Medusa Server (Link to [Quickstart](https://docs.medusajs.com/quickstart/quick-start) here).
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
npm install
```

3. Start the project:

```bash
npm run dev
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
- [Medusa Twitter](https://twitter.com/medusajs)

### 👨‍💻 Our Awesome Maintainers and Contributors 👩‍💻

<a href="https://github.com/manojvirat457/Hacktoberfest-medusa/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=manojvirat457/Hacktoberfest-medusa" />
</a>
