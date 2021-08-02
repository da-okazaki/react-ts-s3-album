import React, { useState, useEffect } from 'react';
import './App.css';

// AWS Amplify
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const bucketName = "react-ts-s3-album-dev-tenants-assets";

const App = () => {

  const [ imageUrl, setImageUrl ]: any = useState("");

  const test = async () => {
    try {
      // 1. Storage.list で階層以下のファイルを取得する
      const imageList = await Storage.list('photos/');
      console.log("imageList", imageList)

        // const signedURL = await Storage.get(`photos/dev_image_001.jpg`, {
      const signedURL = await Storage.get(`photos/`, {
        // level: 'public',
        // bucket: 'reacttss3album9d0250783b0a4f9c8cbd9757ccbfbb13112838-dev'
        //bucket: "react-ts-s3-album-dev-tenants-assets"
      });
      setImageUrl(signedURL);
      console.log("signedURL", signedURL)

    } catch (err) {
      console.log(err);
    }
  }
  test()

  return (
    <div className="App">
      <header className="App-header">
      <img src={imageUrl} className="App-logo" alt="logo" />
        {/*
              <img src={"https://reacttss3album9d0250783b0a4f9c8cbd9757ccbfbb13112838-dev.s3.ap-northeast-1.amazonaws.com/photos/dev_image_001.jpg"} className="App-logo" alt="logo" />
        <img src="https://reacttss3album9d0250783b0a4f9c8cbd9757ccbfbb13112838-dev.s3.ap-northeast-1.amazonaws.com/photos/dev_image_001.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaDmFwLW5vcnRoZWFzdC0xIkgwRgIhAMKMtFzVmdnoYg9teIRvuPYdop1ZgyMxDLmv2%2FycOnGwAiEAmFDzNg395N9LLFKrgpPgzI%2F2AAezGBeL8LaJCCmdXDAq%2FwIIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxNzg3NzE4ODM5NzUiDGWoA634Nr22es2vDSrTAhwT4KgBWIU0SInqqLfqbU%2BkYpLjIJHcaYGvYGCFjmpO1uzNnHphz0nSuyK%2BwzQSL8WrPCxbSToMxOnqpIp59DUXZ9sSY5njSirZlRgSg3AvcivTUnn3dy9ug3V7Q1Qv1PT7Vmc9wDTRlKTsRqis%2BwUav4xaPvOavbhs7xAvAYQR%2FYs9ac5R7yhwk78K%2F5fTi0txz0teqzIBq7XYeDUzjJaWjLllwhmZSyl84%2FM1F7rmWC3JtOapeF38e27QSYJGyUw1RYEcY7AcmIQ854T5pP8biNNOQH4xevCA8T8xaiLfVzpIiJfaeX1T3AmG%2BKlgS5GjaS2kIaScuRVXLMJJrWVuqKdoze4bDmPzti8jgKX3JX1YBNF6ef6Clp%2BjNpT85PQhut7IQ08C2p1d8FdCUWAjdzpIJgizBhpIXy1TNy5ZiMYlj50kl9D0scf0WXauFKKDtDDAtYiIBjqyAuy8a1BG1czEhyA27IzmH4pqWng0NokZNr7xyBWe1C%2B1zhfmpv%2BfgN3IPFOY2kK7PYvx5%2BjgWvgQ25xGF0e1diYVQwCqT5pMcaHCbnIQwqM5%2BiTCf7EVPOAqXnX%2FQ9i1XCZSAhj0WgnO8tXvLBuLlUYuLhEoA6QQ6N9dfqH1XffQPK2pZ3jRFVKDkJ9AANdwPAKFWyC6%2F3rJImZel%2Ft5Bzke4Tmef0xCoeq51lKzKvrQDMTbggeBan1p2N%2FXkzG7VL95e7xeK6Gi1Ia%2BzRNUeVbLulX%2F4gGFLMqP8E45k0UHY6ulZ63HcqLnT%2Bkrs6xJqY6wMc4sETA405mE5bDACezB5LXFjclLUza9vrXeqaKF9GgaPYfP7C%2BMT7GpG5OIehgeToIIqTeIJv9NQ3ACxGaUMA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210729T033313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASTH5CO7DQ4ONTCAJ%2F20210729%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=b2987819ff0e3ef66e8bb88e33bec45d77f4837727a8cb810f69b207228b99e6" className="App-logo" alt="logo" />
        * */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
